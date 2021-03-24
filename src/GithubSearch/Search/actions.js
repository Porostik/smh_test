import { githubSearchTypes } from '../constants';

export const setFilter = (filterValue) => ({
  type: githubSearchTypes.setFilter,
  paylod: filterValue,
});
