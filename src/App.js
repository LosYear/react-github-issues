import React from 'react'
import {hot} from 'react-hot-loader'

import RepositoryInput from './components/RepositoryInput/RepositoryInput';
import IssuesList from './components/IssuesList/IssuesList';
import GithubAPI from "./api/GithubAPI";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: [
                {id: 1, title: "123"},
                {id: 2, title: "123"},
                {id: 3, title: "Test"},
                {id: 4, title: "Test"},
            ]
        };
    }

    fetchIssues = (path) => {
        let newIssues = [];
        GithubAPI.fetchIssues(path).then((data) => {
            newIssues = data;
            console.log(data);
        });

        console.log(newIssues);

        this.setState({
            issues: newIssues
        });
    };

    render() {
        const testItems = this.state.issues;

        return (
            <div>
                <RepositoryInput handleSubmit={this.fetchIssues}/>
                <IssuesList items={testItems}/>
            </div>
        );
    }
}

export default hot(module)(App)