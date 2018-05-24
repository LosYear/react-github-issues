export const ACTION_SET_ITEMS = 'ACTION_CHANGE_ITEMS';

export function setItems(items) {
    return {type: ACTION_SET_ITEMS, items: items};
}