import {ACTION_SET_ITEMS} from '../actions';

function getDefaultState() {
    return [];
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case ACTION_SET_ITEMS:
            return action.items;
    }

    return state;
}