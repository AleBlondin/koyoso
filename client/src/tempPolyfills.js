// @flow
// see https://github.com/facebookincubator/create-react-app/issues/3199
/* eslint-disable */
const raf = (global.requestAnimationFrame = (cb: Function): void => {
  setTimeout(cb, 0);
});

export default raf;
