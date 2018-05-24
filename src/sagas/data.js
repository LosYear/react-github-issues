import {takeEvery, put, call} from 'redux-saga/effects';
import {
    ACTION_FETCH_DATA,
    fetchData,
    setRepositoryName,
    setIssuesCount,
    setCurrentPage,
    setPageSize,
    setItems
} from "../actions";
import GithubAPI from '../api/GithubAPI';
import {setStatus} from "../actions/status";
import RequestIndicator from "../components/RequestIndicator/RequestIndicator";

export function* loadData(action) {
    const repo = action.repositoryName;

    // Set loading status
    yield put(setStatus(RequestIndicator.STATUS_LOADING));

    // Fetch issues count
    try {
        const issuesCount = yield call(GithubAPI.fetchIssuesCount, repo);
        yield put(setIssuesCount(issuesCount));

        // Fetch items
        const items = yield call(GithubAPI.fetchIssues, repo, {per_page: action.pageSize, page: action.currentPage});
        yield put(setItems(items));
    } catch (error) {
        if (error.status === 404) {
            yield put(setStatus(RequestIndicator.STATUS_NOT_FOUND));
        }
        else {
            yield put(setStatus(RequestIndicator.STATUS_ERROR));
        }
        return;
    }

    // Set info
    yield put(setCurrentPage(action.currentPage));
    yield put(setPageSize(action.pageSize));
    // Set loading status
    yield put(setStatus(RequestIndicator.STATUS_SUCCESS));
}

export function* dataSaga() {
    yield takeEvery(ACTION_FETCH_DATA, loadData);
}