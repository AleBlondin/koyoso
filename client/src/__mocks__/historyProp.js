const history = {
  length: 1,
  action: '',
  location: {
    pathname: '',
    search: '',
    hash: '',
    state: '',
  },
  push: jest.fn(),
  replace: jest.fn(),
  go: jest.fn(),
  goBack: jest.fn(),
  goForward: jest.fn(),
  block: jest.fn(),
};

export default history;
