import React, {PureComponent} from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class PageLimitDropdown extends PureComponent {
    static defaultProps = {
        sizes: [5, 10, 30, 50, 100]
    };

    onChange = (event) => {
        this.props.changePageSize(parseInt(event.target.value));
        event.preventDefault();
    };

    render() {
        const items = this.props.sizes.map((size) => (<option key={size} value={size}>{size}</option>));

        return (<select onChange={this.onChange} value={this.props.value}>
            {items}
        </select>);
    }
}

function mapStateToProps(state){
    return {
        value: state.pagination.pageSize
    };
}

export default connect(mapStateToProps, actions)(PageLimitDropdown);