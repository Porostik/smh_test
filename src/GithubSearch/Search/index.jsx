import React from 'react';
import { useDispatch } from 'react-redux';
import SearchComponent from './SearchComponent';
import { setFilter } from './actions';

function Search() {
  const dispatch = useDispatch();
  const onSubmit = (id) => {
    dispatch(setFilter(id));
  };
  return <SearchComponent onSubmit={onSubmit} />;
}

export default Search;
