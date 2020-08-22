import axios from 'axios';

export const post = (dispatch, url, params, start, fail, success) => {
  dispatch({type: start});
  axios({
    method: 'post',
    url: url,
    data: params,
  })
    .then((response) => {
      dispatch({type: success, payload: response.data});
    })
    .catch((err) => {
      dispatch({type: fail});
      console.log('hata: ', err);
    });
};

export const get = (dispatch, url, start, fail, success) => {
  console.log("link:", url)
  dispatch({type: start});
  axios({
    method: 'get',
    url: url,
    headers:{
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDAzYWJkMmJjYWY0MDAxNzM3ZDJhYSIsImlhdCI6MTU5ODA0NDg2MSwiZXhwIjoxNTk4MjE3NjYxfQ.WgOcm0a-JCMXpvluq65uIrhvF78POLSPbIr7mAZarf0'
    },
  })
    .then((response) => {
     dispatch({type: success, payload: response.data});
    })
    .catch((err) => {
      dispatch({type: fail});
      console.log('hata: ' + err);
    });
};
