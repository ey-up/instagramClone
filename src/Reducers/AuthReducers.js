import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../Actions/Types';

import AsyncStorage from '@react-native-community/async-storage';
import {State} from 'react-native-gesture-handler';

const INITIAL_STATE = {
  user: null,
  loading: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      //console.log("loading Start");
      return {...state, loading: true};

    case LOGIN_SUCCESS:
     //console.log('deneme kontrol ', action.payload.message);
      return {...state, loading: false, user: action.payload};

    case LOGIN_FAIL:
      //console.log("fail")
      return {...state, loading: false};
    default:
      return state;
  }
};
