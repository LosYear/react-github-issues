import {ACTION_SET_REPO_NAME} from '../actions';

function getDefaultState() {
    return {
        repositoryName: '',
        itemsCount: 0
    }
}

function setRepositoryName(state, newName) {
    return Object.assign({}, state, {repositoryName: newName});
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case ACTION_SET_REPO_NAME:
            return setRepositoryName(state, action.repositoryName);
    }

    return state;
}