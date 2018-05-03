import {ACTION_CHANGE_ITEMS} from '../actions';

function getDefaultState() {
    return [];
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case ACTION_CHANGE_ITEMS:
            return action.items;
    }

    return state;
}