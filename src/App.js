import React from 'react';
import {hot} from 'react-hot-loader';
import {connect} from 'react-redux';
import * as actions from './actions';

import IssuesList from './components/IssuesList/IssuesList';
import RepositoryInput from './components/RepositoryInput/RepositoryInput';
import PageLimitDropdown from './components/PageLimitDropdown/PageLimitDropdown';
import Pager from './components/Pager/Pager';
import RequestIndicator from './components/RequestIndicator/RequestIndicator';

class App extends React.Component {
    render() {
        return (
            <div>
                <RepositoryInput/>
                <PageLimitDropdown/>
                <RequestIndicator/>
                <IssuesList/>
                <Pager/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, actions)(App);