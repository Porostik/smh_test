import { createSelector } from 'reselect';

const users = (state) => state.githubSearch.list.users;
const idFilter = (state) => state.githubSearch.filter.idFilter;

export const getFiltredByIdUsers = createSelector([users, idFilter], (list, id) => {
  if (!id) return list;
  return list.filter((item) => item.id === +id);
});
