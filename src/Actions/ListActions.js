import {LIST_FAIL, LIST_START, LIST_SUCCESS, CHARACTERS_URL} from './Types';
import {get} from './api';

export const getCharacters = (params) => {
  return (dispatch) => {
    get(dispatch, CHARACTERS_URL, LIST_START, LIST_FAIL, LIST_SUCCESS);
  };
};
