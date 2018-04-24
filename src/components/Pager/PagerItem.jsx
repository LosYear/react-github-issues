import React, {Component} from 'react';

class PagerItem extends Component {
    handleClick = (event) => {
        this.props.setPage(this.props.page);
        event.preventDefault();
    };

    render() {
        return (<li onClick={this.handleClick}>{this.props.title}</li>);
    };
}

export default PagerItem;
