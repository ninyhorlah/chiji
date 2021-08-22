import request from '../utils/request'

export const getUsers = () => async (dispatch) => {
  try {
    const response = await request({
      route: 'users',
    });

    if(response.data) {
      dispatch({
        type: "GET_USERS_SUCCESS",
        payload: response.data
      });

    return response;
  }else {
    console.log('...request failed', response);
    throw response;
  }

  } catch (err) {
    console.log('===========ERRRORR FETCHING USERS=====================', err);
  }
}