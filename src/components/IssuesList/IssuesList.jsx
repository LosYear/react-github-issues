import React, {Component} from 'react';

import RepositoryInput from './../RepositoryInput/RepositoryInput';
import PageLimitDropdown from './../PageLimitDropdown/PageLimitDropdown';
import IssuesListItem from './IssuesListItem';
import GithubAPI from "../../api/GithubAPI";
import Pager from "./../Pager/Pager";
import RequestIndicator from "./../RequestIndicator/RequestIndicator";


class IssuesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currentPage: 1,
            itemsPerPage: 10,
            repositoryName: '',
            itemsCount: 0,
            status: null
        };
    }

    loadData = () => {
        const path = this.state.repositoryName;

        if (path === '') {
            this.setState({items: []});
            return;
        }

        this.setState({
            status: RequestIndicator.STATUS_LOADING
        });

        // @TODO: refactor

        GithubAPI.fetchIssuesCount(path).then((count) => {
            this.setState({itemsCount: count, status: RequestIndicator.STATUS_SUCCESS});
        }).catch((response) => {
            this.setState({status: (response.status === 404) ? RequestIndicator.STATUS_NOT_FOUND : RequestIndicator.STATUS_ERROR});
        });

        GithubAPI.fetchIssues(path, {
            page: this.state.currentPage,
            per_page: this.state.itemsPerPage,
        }).then((items) => {
            this.setState({items: items, status: RequestIndicator.STATUS_SUCCESS});
        }).catch((response) => {
            this.setState({status: (response.status === 404) ? RequestIndicator.STATUS_NOT_FOUND : RequestIndicator.STATUS_ERROR});
        });
    };

    setItemsPerPage = (value) => {
        this.setState({itemsPerPage: value, currentPage: 1});

    };

    setRepositoryName = (value) => {
        this.setState({repositoryName: value});
    };

    setCurrentPage = (value) => {
        this.setState({currentPage: value});
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
                <RequestIndicator status={this.state.status}/>
                <ul>
                    {items}
                </ul>
                <Pager currentPage={this.state.currentPage} setPage={this.setCurrentPage}
                       pagesCount={Math.ceil(this.state.itemsCount / this.state.itemsPerPage)}/>
            </div>
        );
    }
}

export default IssuesList;