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

// INITIAL STATE OF STORE
const initialState = {
  userDetails: [],
  allUser: [],
  notFound: '',
  error: null,
  loginUser: [],
  followers: [],
  followersNotFound: '',
};

// REDUCER FOR UPDATING THE CENTRAL STORE
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    // ADDING NORMAL SEARCHED USER DETAILS
    case AddUser:
      return {
        ...state,
        userDetails: action.User,
        notFound: action.notFound,
      };

    // DELETING USER FROM ALL USER WHEN SUGGESTION IS DELETED FROM AUTHORISED USER
    case DeleteUser:
      return {
        ...state,
        allUser: state.allUser.filter((user) => user.id !== action.id),
      };

    // ADDING SUGGESTIONS FOR AUTHORISED USER
    case AllUser:
      return {
        ...state,
        allUser: action.allUser,
      };

    // ADDING LOGIN FAILED ERROR MESSAGE
    case AuthFail:
      return {
        ...state,
        error: action.error,
      };

    // ADDING LOGIN SUCCESS MESSAGE
    case AuthSucess:
      return {
        ...state,
        error: action.error,
      };

    // ADDING LOGIN USER DETAILS
    case AddLoginUser:
      return {
        ...state,
        loginUser: action.loginUser,
      };

    // RESETTING ERROR VALUE OF NOT FOUND SEARCHED USER DETAILS
    case ResetLoginUser:
      return {
        ...state,
        error: null,
      };

    // ADDING FOLLOWERS DETAILS
    case AddFollowers:
      return {
        ...state,
        followers: action.followers,
        followersNotFound: action.notFound,
      };

    // DEFAULT CASE
    default:
      return state;
  }
};

export default myReducer;
