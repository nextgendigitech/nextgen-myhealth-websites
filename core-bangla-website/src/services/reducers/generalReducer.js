import {
    TOGGLE_LANG,
} from '../actions/types';

const initialState = {
    language: 'bang',  // bang, eng
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_LANG:
            return {
                ...state,
                language: payload,
            }
        default:
            return state;
    }
};
