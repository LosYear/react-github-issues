import React, {Component} from 'react';

class PageLimitDropdown extends Component {
    static defaultProps = {
        sizes: [5, 10, 30, 50, 100]
    };

    onChange = (event) => {
        this.props.onChange(parseInt(event.target.value));
        event.preventDefault();
    };

    render() {
        const items = this.props.sizes.map((size) => (<option key={size} value={size}>{size}</option>));

        return (<select onChange={this.onChange} value={this.props.value}>
            {items}
        </select>);
    }
}

export default PageLimitDropdown;