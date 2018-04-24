import React, {Component} from 'react';

class IssuesListItem extends Component{
    render(){
        const item = this.props.item;
        const date = new Date(item.created_at);
        return (
            <li><b>#{item.number}</b> {item.title} | <i>{date.toLocaleDateString()}</i></li>
        );
    }
}

export default IssuesListItem;