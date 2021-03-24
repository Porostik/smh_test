import React from 'react';

import UserItem from './UserItem';
import './UsersList.scss';

function UsersListComponent({ list }) {
  return (
    <div className="users-list">
      {list.map((item) => (
        <UserItem key={item.id} user={item} />
      ))}
    </div>
  );
}

export default UsersListComponent;
