import React, {Component} from 'react';
import {connect} from 'react-redux';
import IssuesListItem from './IssuesListItem';
import GithubAPI from "../../api/GithubAPI";
import RequestIndicator from "./../RequestIndicator/RequestIndicator";


class IssuesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
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


    componentDidUpdate(prevProps, prevState) {
        const {currentPage, itemsPerPage, repositoryName} = prevState;
        const {currentPage: newCurrentPage, itemsPerPage: newItemsPerPage, repositoryName: newRepositoryName} = this.state;

        if (currentPage !== newCurrentPage || itemsPerPage !== newItemsPerPage || repositoryName !== newRepositoryName) {
            this.loadData();
        }
    }


    render() {
        const items = this.props.items.map((item) => <IssuesListItem key={item.id} item={item}/>);

        return <ul>
            {items}
        </ul>;
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

export default connect(mapStateToProps)(IssuesList);