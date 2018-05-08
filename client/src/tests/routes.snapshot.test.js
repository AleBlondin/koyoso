import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Routes from '../routes';

describe('<Routes>', () => {
  it('should render correctly', () => {
    const tree = shallow(<Routes/>);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
