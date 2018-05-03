import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class RepositoryInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        this.props.changeRepository(this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Репозиторий" onChange={this.handleChange}/>
                <button>Загрузить</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, actions)(RepositoryInput);