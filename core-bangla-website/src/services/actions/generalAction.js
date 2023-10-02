import {
    TOGGLE_LANG,
} from './types';

export const toggleLang = (language) => dispatch => {
    dispatch({
        type: TOGGLE_LANG,
        payload: language,
    });
}
