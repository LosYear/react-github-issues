export const ACTION_CHANGE_ITEMS = 'ACTION_CHANGE_ITEMS';

export function changeItems(items) {
    return {type: ACTION_CHANGE_ITEMS, items: items};
}