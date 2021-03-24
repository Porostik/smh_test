import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';
import UsersListComponent from './UsersListComponent';
import { getFiltredByLoginUsers } from '../selectors';
import Loader from './Loader';

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(({ githubSearch: { list } }) => ({
    isLoading: list.loading,
  }));

  const users = useSelector(getFiltredByLoginUsers);
  React.useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return <UsersListComponent list={users} />;
}

export default UsersList;
