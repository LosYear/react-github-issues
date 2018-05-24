export const ACTION_SET_CURRENT_PAGE = 'ACTION_SET_CURRENT_PAGE';
export const ACTION_SET_PAGE_SIZE = 'ACTION_SET_PAGE_SIZE';

export function setCurrentPage(page) {
    return {type: ACTION_SET_CURRENT_PAGE, page: page};
}

export function setPageSize(size) {
    return {type: ACTION_SET_PAGE_SIZE, size: size};
}
