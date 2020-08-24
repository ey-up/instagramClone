import axios from 'axios';
import {USER} from './Types';
import * as RootNavigation from '../RootNavigation';
import { Alert } from 'react-native';

export const post = (dispatch, url, params, start, fail, success) => {
  dispatch({type: start});
  axios({
    method: 'post',
    url: url,
    data: params,
    headers: {
      authorization: 'Bearer '.concat(USER.token)
  }
  })
    .then((response) => {
      dispatch({type: success, payload: response.data});
      USER.token = 'Bearer '.concat(response.data.token)
      console.log("Basarili Post ", USER.token)
      RootNavigation.replace('TabNav')
    })
    .catch((err) => {
      dispatch({type: fail});
      Alert.alert('Geçersiz')
      console.log('hataPost: ', err);
    });
};

export const get = (dispatch, url, start, fail, success) => {
  console.log("link:", url)
  dispatch({type: start});
  axios({
    method: 'get',
    url: url,
    headers:{
      authorization: USER.token
    },
  })
    .then((response) => {
     dispatch({type: success, payload: response.data});
    })
    .catch((err) => {
      dispatch({type: fail}); 
      console.log('hataGet: ' + err);
    });
};
