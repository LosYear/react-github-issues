import {ACTION_SET_REPO_NAME, ACTION_SET_ISSUES_COUNT} from '../actions';
function getDefaultState() {
    return {
        repositoryName: '',
        itemsCount: 0
    }
}

function setRepositoryName(state, newName) {
    return Object.assign({}, state, {repositoryName: newName});
}

function setIssuesCount(state, newCount){
    return Object.assign({}, state, {itemsCount: newCount});
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case ACTION_SET_REPO_NAME:
            return setRepositoryName(state, action.repositoryName);
        case ACTION_SET_ISSUES_COUNT:
            return setIssuesCount(state, action.issuesCount);
    }

    return state;
}