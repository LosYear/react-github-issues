import {ACTION_SET_CURRENT_PAGE, ACTION_SET_PAGE_SIZE} from "../actions/pagination";

function getDefaultState() {
    return {
        currentPage: 1,
        pageSize: 10
    }
}

function setPageSize(state, size) {
    return Object.assign({}, state, {pageSize: size});
}

function setCurrentPage(state, page){
    return Object.assign({}, state, {currentPage: page});
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case ACTION_SET_PAGE_SIZE:
            return setPageSize(state, action.size);
        case ACTION_SET_CURRENT_PAGE:
            return setCurrentPage(state, action.page);
    }

    return state;
}