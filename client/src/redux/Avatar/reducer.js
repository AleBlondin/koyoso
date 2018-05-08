// @flow
import { UPDATE_USER_ID, USER_FETCH_SUCCESS } from './constant';

const initialState = {
  userAvatarUrl: null,
  userId: null,
};

export default function reducer(state: AvatarStore = initialState, action: UserAction) {
  switch (action.type) {
    case UPDATE_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        userAvatarUrl: action.payload.avatar_url,
      };
    default:
      return state;
  }
}
