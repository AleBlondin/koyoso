// @flow
import * as actions from '../actions';
import * as cst from '../constant';

describe('[Action] Avatar', () => {
  describe('updateUserId', () => {
    it('should return an action', () => {
      expect(actions.updateUserId('github')).toEqual({
        type: cst.UPDATE_USER_ID,
        payload: 'github',
      });
    });
  });

  describe('fetchUserRequest', () => {
    it('should return an action', () => {
      expect(actions.fetchUserRequest('github')).toEqual({
        type: cst.USER_FETCH_REQUEST,
        payload: { userId: 'github' },
      });
    });
  });

  describe('fetchUserSuccess', () => {
    it('should return an action', () => {
      const user = { name: 'me' };
      expect(actions.fetchUserSuccess(user)).toEqual({
        type: cst.USER_FETCH_SUCCESS,
        payload: user,
      });
    });
  });

  describe('fetchUserError', () => {
    it('should return an action', () => {
      const error = { message: 'unauthorized' };
      expect(actions.fetchUserError(error)).toEqual({
        type: cst.USER_FETCH_ERROR,
        payload: error.message,
      });
    });
  });
});
