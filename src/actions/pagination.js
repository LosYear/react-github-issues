export const ACTION_CHANGE_CURRENT_PAGE = 'ACTION_CHANGE_CURRENT_PAGE';
export const ACTION_CHANGE_PAGE_SIZE = 'ACTION_CHANGE_PAGE_SIZE';

export function changeCurrentPage(page) {
    return {type: ACTION_CHANGE_CURRENT_PAGE, page: page};
}

export function changePageSize(size) {
    return {type: ACTION_CHANGE_PAGE_SIZE, size: size};
}