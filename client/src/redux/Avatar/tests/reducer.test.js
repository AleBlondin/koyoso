import reducer from '../reducer';
import { UPDATE_USER_ID, USER_FETCH_SUCCESS } from '../constant';

describe('[Reducer] Avatar reducer', () => {
  const previousState = {
    userId: null,
    userAvatarUrl: null,
  };

  it('should return the inital state when passing no state', () => {
    const state = reducer(undefined, { type: 'FAKE_TYPE' });
    expect(state).toEqual({
      userAvatarUrl: null,
      userId: null,
    });
  });

  describe('UPDATE_USER_ID case', () => {
    const action = { type: UPDATE_USER_ID, payload: 16 };

    it('should set userId', () => {
      const state = reducer(undefined, action);
      expect(state).toEqual({
        userAvatarUrl: null,
        userId: 16,
      });
    });

    it('should modify state immutably', () => {
      const state = reducer(previousState, action);
      expect(state).not.toBe(previousState);
    });
  });

  describe('USER_FETCH_SUCCESS case', () => {
    const action = {
      type: USER_FETCH_SUCCESS,
      payload: { avatar_url: 'avatar_url' },
    };

    it('should set userAvatarUrl', () => {
      const state = reducer(undefined, action);
      expect(state).toEqual({
        userAvatarUrl: 'avatar_url',
        userId: null,
      });
    });

    it('should modify state immutably', () => {
      const state = reducer(previousState, action);
      expect(state).not.toBe(previousState);
    });
  });
});
