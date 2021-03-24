import React from 'react';
import UsersList from './List';
import Search from './Search';

function GithubSearch() {
  return (
    <div>
      <Search />
      <UsersList />
    </div>
  );
}

export default GithubSearch;
