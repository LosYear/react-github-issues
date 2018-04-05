import React, {Component} from 'react';

import RepositoryInput from './../RepositoryInput/RepositoryInput';
import PageLimitDropdown from './../PageLimitDropdown/PageLimitDropdown';
import IssuesListItem from './IssuesListItem';
import GithubAPI from "../../api/GithubAPI";


class IssuesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currentPage: 1,
            itemsPerPage: 10,
            repositoryName: ''
        };
    }

    loadData = () => {
        const path = this.state.repositoryName;

        if (path === '') {
            this.setState({items: []});
            return;
        }

        GithubAPI.fetchIssues(path, {
            page: this.state.currentPage,
            per_page: this.state.itemsPerPage,
        }).then((items) => {
            this.setState({items: items});
        });
    };

    setItemsPerPage = (value) => {
        this.setState({itemsPerPage: value, currentPage: 1});

    };

    setRepositoryName = (value) => {
        this.setState({repositoryName: value});
    };

    componentDidUpdate(prevProps, prevState) {
        const {currentPage, itemsPerPage, repositoryName} = prevState;
        const {currentPage: newCurrentPage, itemsPerPage: newItemsPerPage, repositoryName: newRepositoryName} = this.state;

        if (currentPage !== newCurrentPage || itemsPerPage !== newItemsPerPage || repositoryName !== newRepositoryName) {
            this.loadData();
        }
    }


    render() {
        const items = this.state.items.map((item) => <IssuesListItem key={item.id} item={item}/>);

        return (
            <div>
                <RepositoryInput handleSubmit={this.setRepositoryName}/>
                <PageLimitDropdown onChange={this.setItemsPerPage} value={this.state.itemsPerPage}/>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default IssuesList;