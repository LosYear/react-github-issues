import React, {Component} from 'react';
import {connect} from 'react-redux';
import IssuesListItem from './IssuesListItem';
import RequestIndicator from "../RequestIndicator/RequestIndicator";


class IssuesList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const items = this.props.items.map((item) => <IssuesListItem key={item.id} item={item}/>);

        return (this.props.requestStatus &&
            <ul>
                {items}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        requestStatus: state.request.status === RequestIndicator.STATUS_SUCCESS
    };
}

export default connect(mapStateToProps)(IssuesList);