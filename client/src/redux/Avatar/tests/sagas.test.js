// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'services/networking/request';
import fetchUserSaga, { fetchUser } from '../sagas';
import { fetchUserRequest, fetchUserSuccess, fetchUserError } from '../actions';
import { USER_FETCH_REQUEST } from '../constant';

describe('[Saga] Avatar redux', () => {
  describe('fetchUser', () => {
    describe('when request is a success', () => {
      const action = fetchUserRequest('me');
      const gen = fetchUser(action);

      it('should call the github api', () => {
        const url = 'https://api.github.com/users/me';
        expect(gen.next().value).toEqual(call(request, url));
      });

      it('should call the success action when request is a success', () => {
        const outputMock = {};
        expect(gen.next(outputMock).value).toEqual(put(fetchUserSuccess(outputMock)));
      });
    });

    describe('when request fails', () => {
      const action = fetchUserRequest('me');
      const gen = fetchUser(action);

      it('should call the error action', () => {
        const url = 'https://api.github.com/users/me';
        expect(gen.next().value).toEqual(call(request, url));
        expect(gen.throw({ message: 'error' }).value).toEqual(
          put(fetchUserError({ message: 'error' })),
        );
      });
    });
  });

  describe('fetchUserSaga', () => {
    it('should take every USER_FETCH_REQUEST actions', () => {
      const gen = fetchUserSaga();
      expect(gen.next().value).toEqual(takeEvery(USER_FETCH_REQUEST, fetchUser));
    });
  });
});
