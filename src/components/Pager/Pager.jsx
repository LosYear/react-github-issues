import React, {Component} from 'react';
import PagerItem from './PagerItem';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import RequestIndicator from "../RequestIndicator/RequestIndicator";

class Pager extends Component {
    static defaultProps = {
        maxPages: 10
    };

    render() {
        const maxPages = this.props.maxPages - 1;
        let start = Math.max(1, this.props.currentPage - Math.floor(maxPages / 2));
        let end = Math.min(this.props.pagesCount, start + maxPages);

        if (start + maxPages > this.props.pagesCount) {
            start = Math.max(1, this.props.pagesCount - maxPages);
        }

        let items = [];

        for (let i = start; i <= end; i++) {
            items.push(<PagerItem setPage={this.props.changeCurrentPage} key={i} title={i} page={i}/>);
        }

        items.unshift(<PagerItem setPage={this.props.changeCurrentPage} key={0} page={1} title="Первая"/>);

        items.push(<PagerItem setPage={this.props.changeCurrentPage} key={this.props.pagesCount + 1}
                              page={this.props.pagesCount} title="Последняя"/>);

        return (this.props.requestStatus && <ul>
            {items}
        </ul>);
    }

}

function mapStateToProps(state) {
    return {
        currentPage: state.pagination.currentPage,
        pagesCount: Math.ceil(state.repository.itemsCount / state.pagination.pageSize),
        requestStatus: state.request.status === RequestIndicator.STATUS_SUCCESS
    };
}


export default connect(mapStateToProps, actions)(Pager);