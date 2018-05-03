import {takeEvery, put, call} from 'redux-saga/effects';
import {ACTION_CHANGE_REPO, setRepositoryName} from "../actions";
import GithubAPI from '../api/GithubAPI';

export function* loadData(action) {
    // Change repo name
    const repo = action.repositoryName;
    yield put(setRepositoryName(repo));

    // Fetch issues count
    const issuesCount = yield call(GithubAPI.fetchIssuesCount, repo);
    yield put(set)
}

export function* repositorySaga(){
    yield takeEvery(ACTION_CHANGE_REPO, loadData)
}