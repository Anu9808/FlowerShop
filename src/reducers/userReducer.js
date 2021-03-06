import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,
   USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL,
  USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL,
  USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_DETAIL_FAIL,
  USER_ORDER_REQUEST, USER_ORDER_SUCCESS, USER_ORDER_FAIL
} from "../constants/userConstants";


function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true, isLoggedIn:false };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, isLoggedIn:true, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, isLoggedIn:false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default: return state;
  }
}

function userUpdateReducer(state = {}, action) {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userDetailReducer(state={},action){
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { loading: true };
    case USER_DETAIL_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userOrderReducer(state={},action){
  switch (action.type) {
    case USER_ORDER_REQUEST:
      return { loading: true };
    case USER_ORDER_SUCCESS:
      return { loading: false, orders: action.payload };
    case USER_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export {
  userSigninReducer, userRegisterReducer, userUpdateReducer,
  userDetailReducer, userOrderReducer
}