export const ACTION_SET_REQUEST_STATUS = 'ACTION_SET_REQUEST_STATUS';

/**
 * Устанавливает текущий статус запроса
 * @param status
 * @returns {{type: string, status: *}}
 */
export function setStatus(status) {
    return {type: ACTION_SET_REQUEST_STATUS, status: status};
}