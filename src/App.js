import React from 'react'
import {hot} from 'react-hot-loader'

import RepositoryInput from './components/RepositoryInput/RepositoryInput';
import IssuesList from './components/IssuesList/IssuesList';
import GithubAPI from "./api/GithubAPI";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: []
        };
    }

    fetchIssues = (path) => {
        GithubAPI.fetchIssues(path).then((items) =>{
            this.setState({issues: items});
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