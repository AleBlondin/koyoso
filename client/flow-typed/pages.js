// @flow
/* eslint-disable no-undef, flowtype/delimiter-dangle */


  declare type User = {
    avatar_url?: string,
  };

  declare type UpdateUserIdAction = {
    type: 'Avatar/UPDATE_USER_ID',
    payload: string,
  };

  declare type FetchUserRequestAction = {
    type: 'Avatar/USER_FETCH_REQUEST',
    payload: {
      userId: string,
    },
  };

  declare type FetchUserSuccessAction = {
    type: 'Avatar/USER_FETCH_SUCCESS',
    payload: User,
  };

  declare type FetchUserErrorAction = {
    type: 'Avatar/USER_FETCH_ERROR',
    payload: string,
  };

  declare type UserAction =
    | UpdateUserIdAction
    | FetchUserRequestAction
    | FetchUserSuccessAction
    | FetchUserErrorAction;


