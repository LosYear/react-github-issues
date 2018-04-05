import React, {Component} from 'react';

import RepositoryInput from './../RepositoryInput/RepositoryInput';
import IssuesListItem from './IssuesListItem';
import GithubAPI from "../../api/GithubAPI";


class IssuesList extends Component {
    constructor(props) {
        super(props);

        this.state = {items: []};
    }


    loadData = (path) => {
        GithubAPI.fetchIssues(path).then((items) => {
            this.setState({items: items});
        });
    };


    render() {
        const items = this.state.items.map((item) => <IssuesListItem key={item.id} item={item}/>);

        return (
            <div>
                <RepositoryInput handleSubmit={this.loadData}/>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default IssuesList;