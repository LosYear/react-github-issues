import React from 'react'
import {hot} from 'react-hot-loader'

import IssuesList from './components/IssuesList/IssuesList';

class App extends React.Component {
    render() {
        return (
            <div>
                <IssuesList/>
            </div>
        );
    }
}

export default hot(module)(App)