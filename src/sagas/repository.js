import {takeEvery, put, call} from 'redux-saga/effects';
import {ACTION_CHANGE_REPO, setRepositoryName, setIssuesCount, changeCurrentPage} from "../actions";
import GithubAPI from '../api/GithubAPI';
import {setCurrentPage, fetchData} from "../actions";

export function* changeRepo(action){
    // Change repo name
    const repo = action.repositoryName;
    yield put(setRepositoryName(repo));

    yield put(fetchData(repo, 1, 10));
}

export function* repositorySaga(){
    yield takeEvery(ACTION_CHANGE_REPO, changeRepo);
}