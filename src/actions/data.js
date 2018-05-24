export const ACTION_FETCH_DATA = 'ACTION_FETCH_DATA';

/**
 * Делает запрос к API GitHub
 * @param name
 * @param page
 * @param pageSize
 * @returns {{type: string, repositoryName: *, currentPage: *, pageSize: *}}
 */
export function fetchData(name, page, pageSize) {
    return {type: ACTION_FETCH_DATA, repositoryName: name, currentPage: page, pageSize: pageSize};
}