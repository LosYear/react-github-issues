import {ACTION_SET_REQUEST_STATUS} from "../actions";

function getDefaultState() {
    return {
        status: false
    }
}

function setRequestStatus(state, status) {
    return Object.assign({}, state, {status: status});
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case ACTION_SET_REQUEST_STATUS:
            return setRequestStatus(state, action.status);
    }

    return state;
}