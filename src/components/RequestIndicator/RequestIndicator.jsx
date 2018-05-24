import React, {Component} from 'react';
import {connect} from "react-redux";

class RequestIndicator extends Component{
    static get STATUS_LOADING(){
        return 'STATUS_LOADING';
    }

    static get STATUS_NOT_FOUND(){
        return 'STATUS_NOT_FOUND';
    }

    static get STATUS_ERROR(){
        return 'STATUS_ERROR';
    }

    static get STATUS_SUCCESS(){
        return 'STATUS_SUCCESS';
    }

    render(){
        if(this.props.status === RequestIndicator.STATUS_LOADING){
            return "LOADING";
        }
        else if (this.props.status === RequestIndicator.STATUS_ERROR){
            return "ERROR";
        }
        else if(this.props.status === RequestIndicator.STATUS_NOT_FOUND){
            return "NOT_FOUND";
        }
        else if(this.props.status === RequestIndicator.STATUS_SUCCESS){
            return "SUCCESS";
        }

        return "";
    }
}

function mapStateToProps(state) {
    return {
        status: state.request.status
    };
}

export default connect(mapStateToProps)(RequestIndicator);