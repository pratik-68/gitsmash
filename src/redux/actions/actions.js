// IMPORTING SERVICES FROM SERVICE FOLDER
import getUserData from '../../services/getUserData';
import getLoginData from '../../services/getLoginData';
import getAllUser from '../../services/getAllUser';
import getFollowersDetails from '../../services/getFollowersDetails';

// IMPORTING COOKIES FROM REACT UNIVERSAL COOKIE
import Cookies from 'universal-cookie';

// IMPORTING CONSTANTS FROM CONSTANT FILE
import {
  AddUser,
  AuthFail,
  AuthSucess,
  AddLoginUser,
  ResetLoginUser,
  DeleteUser,
  AllUser,
  AddFollowers,
} from '../../constants';

// ACTION FOR ADDING NORMAL SEARCHED USER DETAILS
export const addUser = (username) => (dispatch) => {
  getUserData(username).then((data) => {
    dispatch({
      type: AddUser,
      User: data,
      notFound: data.message,
    });
  });
};

// ACTION FOR ADDING LOGIN USER STATUS DETAILS
export const addLoginUser = (username, token) => (dispatch) => {
  getLoginData(token).then((data) => {
    if (data.login !== username) {
      dispatch({
        type: AuthFail,
        error: 'FAIL',
      });
    } else {
      const cookies = new Cookies();
      cookies.set('token', `${token}`);
      dispatch({
        type: AuthSucess,
        error: 'SUCCESS',
      });
    }
  });
};

// ACTION FOR ADDING LOGIN USER DETAILS
export const refreshAuth = (token) => (dispatch) => {
  getLoginData(token).then((data) => {
    dispatch({
      type: AddLoginUser,
      loginUser: data,
    });
  });
};

// ACTION FOR RESETTING ERROR VALUE OF NOT FOUND SEARCHED USER DETAILS
export const resetErrorValue = () => (dispatch) => {
  dispatch({
    type: ResetLoginUser,
  });
};

// ACTION FOR GETTING RANDOM USERS FOR SUGGESTIONS
export const allUser = () => (dispatch) => {
  getAllUser().then((data) => {
    dispatch({
      type: AllUser,
      allUser: data,
    });
  });
};

// ACTION FOR DELETING SELECTED SUGGESTED USER
export const deleteUser = (id) => (dispatch) => {
  dispatch({
    type: DeleteUser,
    id: id,
  });
};

// ACTION FOR ADDING FOLLOWERS DETAILS OF A USER
export const addFollowers = (username) => (dispatch) => {
  getFollowersDetails(username).then((data) => {
    dispatch({
      type: AddFollowers,
      followers: data,
      notFound: data.message,
    });
  });
};
