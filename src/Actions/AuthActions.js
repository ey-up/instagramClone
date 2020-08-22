import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_URL,
  REGISTER_URL,
} from './Types';
import {post} from './api';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const loginAction = (params) => {
  return (dispatch) => {
    post(dispatch,LOGIN_URL,params,LOGIN_START,LOGIN_FAIL,LOGIN_SUCCESS)
  };
};

export const registerAction = (params) => {
  return (dispatch) => {
    post(dispatch,REGISTER_URL,params,LOGIN_START,LOGIN_FAIL,LOGIN_SUCCESS)
  };
};
