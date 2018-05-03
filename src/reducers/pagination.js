import {ACTION_CHANGE_CURRENT_PAGE, ACTION_CHANGE_PAGE_SIZE} from "../actions/pagination";

function getDefaultState() {
    return {
        currentPage: 1,
        pageSize: 10
    }
}

function changePageSize(state, size) {
    return Object.assign({}, state, {pageSize: size, currentPage: 1});
}

function changeCurrentPage(state, page){
    return Object.assign({}, state, {currentPage: page});
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case ACTION_CHANGE_PAGE_SIZE:
            return changePageSize(state, action.size);
        case ACTION_CHANGE_CURRENT_PAGE:
            return changeCurrentPage(state, action.page);
    }

    return state;
}