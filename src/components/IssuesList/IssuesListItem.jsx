import React, {Component} from 'react';

class IssuesListItem extends Component{
    render(){
        const item = this.props.item;
        return (
            <li>{item.title}</li>
        );
    }
}

export default IssuesListItem;