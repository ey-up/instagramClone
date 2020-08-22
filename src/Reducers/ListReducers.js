import {LIST_FAIL,LIST_START,LIST_SUCCESS} from '../Actions/Types';

import AsyncStorage from '@react-native-community/async-storage';
import {State} from 'react-native-gesture-handler';

const INITIAL_STATE = {
  list:[],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_START:
      //console.log("loading Start");
      return {...state, loading: true};

    case LIST_SUCCESS:
      //console.log('deneme kontrol ', action.payload.message);
      return {...state, loading: false, list: action.payload.characters};

    case LIST_FAIL:
      //console.log("fail")
      return {...state, loading: false};
    default:
      return state;
  }
};
