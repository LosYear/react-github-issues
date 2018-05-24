import React, {Component} from 'react';
import {connect} from 'react-redux';
import IssuesListItem from './IssuesListItem';
import GithubAPI from "../../api/GithubAPI";
import RequestIndicator from "./../RequestIndicator/RequestIndicator";


class IssuesList extends Component {
    constructor(props) {
        super(props);
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