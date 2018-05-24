import {takeEvery, put, call} from 'redux-saga/effects';
import {ACTION_FETCH_DATA, fetchData, setRepositoryName, setIssuesCount, setCurrentPage, setPageSize, setItems} from "../actions";
import GithubAPI from '../api/GithubAPI';

export function* loadData(action) {
    const repo = action.repositoryName;

    // Fetch issues count
    const issuesCount = yield call(GithubAPI.fetchIssuesCount, repo);
    yield put(setIssuesCount(issuesCount));

    // Set info
    yield put(setCurrentPage(action.currentPage));
    yield put(setPageSize(action.pageSize));

    // Fetch items
    const items = yield call(GithubAPI.fetchIssues, repo, {per_page: action.pageSize, page: action.currentPage});
    yield put(setItems(items));
}

export function* dataSaga(){
    yield takeEvery(ACTION_FETCH_DATA, loadData);
}