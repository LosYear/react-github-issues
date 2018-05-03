export const ACTION_CHANGE_REPO = 'ACTION_CHANGE_REPO';
export const ACTION_SET_REPO_NAME = 'ACTION_SET_REPO_NAME';

export function setRepositoryName(name) {
    return {type: ACTION_SET_REPO_NAME, repositoryName: name};
}

export function changeRepository(name){
    return {type: ACTION_CHANGE_REPO, repositoryName: name};
}