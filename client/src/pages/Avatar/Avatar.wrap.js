// @flow
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { actions } from 'redux/Avatar';

import Avatar from './Avatar';

const mapStateToProps = (state: Store): AvatarStore => ({
  userId: state.avatar.userId,
  userAvatarUrl: state.avatar.userAvatarUrl,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUser(userId) {
    dispatch(actions.fetchUserRequest(userId));
  },
  updateUserId(userId) {
    dispatch(actions.updateUserId(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Avatar));
