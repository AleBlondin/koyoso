// @flow
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../App';

describe('<App>', () => {
  it('should render correctly', () => {
    const props = {
      store: {
        subscribe: () => {},
        dispatch: () => {},
        getState: () => {},
      },
    };

    const tree = shallow(<App {...props} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  describe('<Route>', () => {
    it('should render the Root component', () => {
      const props = {
        store: {
          subscribe: () => {},
          dispatch: () => {},
          getState: () => {},
        },
      };

      const tree = shallow(<App {...props} />);
      const route = tree.find('Route');
      expect(route.prop('component')()).toMatchSnapshot();
    });
  });
});
