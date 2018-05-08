// @flow
import React from 'react';
import { shallow } from 'enzyme';

import historyProp from '__mocks__/historyProp';
import Avatar from '../Avatar';

describe('<Avatar />', () => {
  let wrapper = {
    find: jest.fn(),
    setProps: jest.fn(),
  };
  const props = {
    userId: 'Juste Leblanc',
    userAvatarUrl: 'url',
    intl: {
      formatMessage: jest.fn(),
    },
    fetchUser: jest.fn(),
    updateUserId: jest.fn(),
    history: historyProp,
  };

  describe('render', () => {
    beforeEach(() => {
      wrapper = shallow(<Avatar {...props} />);
    });

    it('should call onInputChange when writing in the text input', () => {
      const input = wrapper.find('input');
      // $FlowFixMe
      expect(input.prop('onChange')).toBe(wrapper.instance().onInputChange);
    });

    it('should call fetchUser when clicking on button', () => {
      const button = wrapper.find('button').last();
      // $FlowFixMe
      expect(button.prop('onClick')).toBe(wrapper.instance().fetchUser);
    });

    it('should display an image if userAvatarUrl is set', () => {
      const image = wrapper.find('img');
      expect(image).toHaveLength(1);
      expect(image.prop('src')).toBe('url');
    });

    it('should not display an image if userAvatarUrl is not set', () => {
      wrapper.setProps({ userAvatarUrl: null });
      const image = wrapper.find('img');
      expect(image).toHaveLength(0);
    });
  });

  describe('onInputChange', () => {
    it('should call updateUserId with the event value', () => {
      const avatar = new Avatar(props);

      expect(props.updateUserId.mock.calls.length).toBe(0);
      // $FlowFixMe
      avatar.onInputChange({ target: { value: 'value' } });
      expect(props.updateUserId.mock.calls.length).toBe(1);
      expect(props.updateUserId.mock.calls[0][0]).toBe('value');
    });
  });

  describe('fetchUser', () => {
    it('should call fetchUser with the user id prop', () => {
      const avatar = new Avatar(props);

      expect(props.fetchUser.mock.calls.length).toBe(0);
      avatar.fetchUser();
      expect(props.fetchUser.mock.calls.length).toBe(1);
      expect(props.fetchUser.mock.calls[0][0]).toBe(props.userId);
    });
  });

  describe('navigateTo', () => {
    it('should redirect to specified path', () => {
      const avatar = new Avatar(props);

      expect(props.history.push.mock.calls.length).toBe(0);
      avatar.navigateTo('/path')();
      expect(props.history.push.mock.calls.length).toBe(1);
      expect(props.history.push.mock.calls[0][0]).toBe('/path');
    });
  });
});
