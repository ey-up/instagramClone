import {UPDATE_LIST,GET_LIST,ADD_LIST_LOCAL,DELETE_LIST,ADD_COUNTER_LOCAL,CHANGE_TODO} from './Types';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


export const loginAction = (payload) => {
    return () => {
        
        console.log(payload)
        axios({
            method:'post',
            url:'https://kodluyoruzrn55.herokuapp.com/login',
            data:payload,

        }).then((response) =>{
            console.log("basarili "+response);
        }).catch((err)=>{
            console.log("hata: "+err)
        });

    };
  };
