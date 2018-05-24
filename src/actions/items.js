export const ACTION_SET_ITEMS = 'ACTION_CHANGE_ITEMS';

/**
 * Устанавливает данные в состоянии
 * @param items
 * @returns {{type: string, items: *}}
 */
export function setItems(items) {
    return {type: ACTION_SET_ITEMS, items: items};
}