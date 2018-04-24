import React, {Component} from 'react';

const STATUS_LOADING = Symbol("loading");
const STATUS_NOT_FOUND = Symbol("not_found");
const STATUS_ERROR = Symbol("error");
const STATUS_SUCCESS = Symbol("success");


class RequestIndicator extends Component{
    static get STATUS_LOADING(){
        return STATUS_LOADING;
    }

    static get STATUS_NOT_FOUND(){
        return STATUS_NOT_FOUND;
    }

    static get STATUS_ERROR(){
        return STATUS_ERROR;
    }

    static get STATUS_SUCCESS(){
        return STATUS_SUCCESS;
    }

    render(){
        if(this.props.status === STATUS_LOADING){
            return "LOADING";
        }
        else if (this.props.status === STATUS_ERROR){
            return "ERROR";
        }
        else if(this.props.status === STATUS_NOT_FOUND){
            return "NOT_FOUND";
        }
        else if(this.props.status === STATUS_SUCCESS){
            return "SUCCESS";
        }

        return "";
    }
}

export default RequestIndicator;