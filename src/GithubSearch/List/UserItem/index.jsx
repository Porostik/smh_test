import React from 'react';
import './UserItem.scss';

function UserItem({ user }) {
  return (
    <div className="users-item">
      <div className="info">
        <span className="info__title">Id: </span>
        <span className="info__value">{user.id}</span>
      </div>
      <div className="info">
        <span className="info__title">Login: </span>
        <span className="info__value">{user.login}</span>
      </div>
      <div className="avatar">
        <img className="avatarImg" alt="" src={user.avatar_url} />
      </div>
      <a className="gh-ref" href={user.html_url}>
        Перейти в профиль
      </a>
    </div>
  );
}

export default UserItem;
