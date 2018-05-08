// @flow
import {
  UPDATE_USER_ID,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_ERROR,
} from './constant';

export function updateUserId(userId: string): UpdateUserIdAction {
  return {
    type: UPDATE_USER_ID,
    payload: userId,
  };
}

export function fetchUserRequest(userId: string): FetchUserRequestAction {
  return {
    type: USER_FETCH_REQUEST,
    payload: { userId },
  };
}

export function fetchUserSuccess(user: User): FetchUserSuccessAction {
  return {
    type: USER_FETCH_SUCCESS,
    payload: user,
  };
}

export function fetchUserError(error: ErrorType): FetchUserErrorAction {
  return {
    type: USER_FETCH_ERROR,
    payload: error.message,
  };
}

export default {
  updateUserId,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
};
