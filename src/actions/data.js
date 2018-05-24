export const ACTION_FETCH_DATA = 'ACTION_FETCH_DATA';

export function fetchData(name, page, pageSize) {
    return {type: ACTION_FETCH_DATA, repositoryName: name, currentPage: page, pageSize: pageSize};
}