import {takeEvery, put, select} from 'redux-saga/effects';
import {ACTION_CHANGE_PAGE_SIZE, fetchData, setPageSize, ACTION_CHANGE_CURRENT_PAGE, setCurrentPage} from "../actions";
import {getPageSize, getRepositoryName} from "../selectors";

export function* changePageSizeHandler(action) {
    yield put(setPageSize(action.size));

    const repo = yield select(getRepositoryName);

    yield put(fetchData(repo, 1, action.size));
}

export function* changeCurrentPageHandler(action) {
    const repo = yield select(getRepositoryName);
    const pageSize = yield select(getPageSize);

    yield put(fetchData(repo, action.currentPage, pageSize));
}

export function* paginationSaga(){
    yield takeEvery(ACTION_CHANGE_PAGE_SIZE, changePageSizeHandler);
    yield takeEvery(ACTION_CHANGE_CURRENT_PAGE, changeCurrentPageHandler)
}