import React from 'react';
import { useDispatch } from 'react-redux';
import SearchComponent from './SearchComponent';
import { setIdFilter } from './actions';

function Search() {
  const dispatch = useDispatch();
  const onSubmit = (id) => {
    dispatch(setIdFilter(id));
  };
  return <SearchComponent onSubmit={onSubmit} />;
}

export default Search;
