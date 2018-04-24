import React, {Component} from 'react';

class RepositoryInput extends Component{
    constructor(props){
        super(props);

        this.state ={
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        this.props.handleSubmit(this.state.value);
        event.preventDefault();
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Репозиторий" onChange={this.handleChange}/>
                <button>Загрузить</button>
            </form>
        );
    }
}

export default RepositoryInput;