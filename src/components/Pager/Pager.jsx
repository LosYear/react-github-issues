import React, {Component} from 'react';
import PagerItem from './PagerItem';

class Pager extends Component {
    static defaultProps = {
        maxPages: 10
    };

    render() {
        const maxPages = this.props.maxPages - 1;
        let start = Math.max(1, this.props.currentPage - Math.floor(maxPages / 2));
        let end = Math.min(this.props.pagesCount, start + maxPages);

        if(start + maxPages > this.props.pagesCount){
            start = Math.max(1, this.props.pagesCount - maxPages);
        }

        let items = [];

        for (let i = start; i <= end; i++) {
            items.push(<PagerItem setPage={this.props.setPage} key={i} title={i} page={i}/>);
        }

        items.unshift(<PagerItem setPage={this.props.setPage} key={0} page={1} title="Первая"/>);

        items.push(<PagerItem setPage={this.props.setPage} key={this.props.pagesCount + 1}
                              page={this.props.pagesCount} title="Последняя"/>);

        return (<ul>
            {items}
        </ul>);
    }

}

export default Pager;