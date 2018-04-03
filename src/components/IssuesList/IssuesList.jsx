import React, {Component} from 'react';
import IssuesListItem from './IssuesListItem';


class IssuesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.items.map((item) => <IssuesListItem key={item.id} item={item}/>);

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default IssuesList;