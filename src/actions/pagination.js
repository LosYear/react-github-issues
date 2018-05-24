export const ACTION_SET_CURRENT_PAGE = 'ACTION_SET_CURRENT_PAGE';
export const ACTION_SET_PAGE_SIZE = 'ACTION_SET_PAGE_SIZE';
export const ACTION_CHANGE_PAGE_SIZE = 'ACTION_CHANGE_PAGE_SIZE';
export const ACTION_CHANGE_CURRENT_PAGE = 'ACTION_CHANGE_CURRENT_PAGE';

/**
 * Устанавливает текущую страницу в состоянии
 * @param page
 * @returns {{type: string, page: *}}
 */
export function setCurrentPage(page) {
    return {type: ACTION_SET_CURRENT_PAGE, page: page};
}

/**
 * Устанавливает размер старницы в состоянии
 * @param size
 * @returns {{type: string, size: *}}
 */
export function setPageSize(size) {
    return {type: ACTION_SET_PAGE_SIZE, size: size};
}

/**
 * Сигнализирует о том, что размер страницы был изменен пользователем, перезагружает данные
 * @param size
 * @returns {{type: string, size: *}}
 */
export function changePageSize(size) {
    return {type: ACTION_CHANGE_PAGE_SIZE, size: size};
}

/**
 * Сигнализирует об изменении текущей страницы пользователем
 * @param page
 */
export function changeCurrentPage(page) {
    return {type: ACTION_CHANGE_CURRENT_PAGE, currentPage: page};
}