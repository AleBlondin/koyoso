// @flow
import * as React from 'react';
import { FormattedMessage, intlShape } from 'react-intl';

import StyledAvatar from './Avatar.style';

type Props = {
  intl: intlShape,
  history: History,
  fetchUser: (userId: string) => void,
  updateUserId: (value: string) => void,
  userAvatarUrl: string,
  userId: string,
};

class Avatar extends React.Component<Props> {
  onInputChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    this.props.updateUserId(event.target.value);
  };

  fetchUser = (): void => {
    this.props.fetchUser(this.props.userId);
  };

  navigateTo = (path: string) => () => {
    this.props.history.push(path);
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { userAvatarUrl } = this.props;

    return (
      <StyledAvatar>
        <button tabIndex={0} onClick={this.navigateTo('/')}>
          <FormattedMessage id="page.back" />
        </button>
        <p>{formatMessage({ id: 'page.api-to-translate-example' })}</p>
        <p>
          <input
            className="github-avatar-input"
            type="text"
            onChange={this.onInputChange}
            placeholder={formatMessage({ id: 'page.add-github-username' })}
          />
        </p>
        <p>
          <button onClick={this.fetchUser}>
            <FormattedMessage id="page.fetch-github-avatar" />
          </button>
        </p>
        {userAvatarUrl && <img src={userAvatarUrl} alt="user avatar" />}
      </StyledAvatar>
    );
  }
}

export default Avatar;
