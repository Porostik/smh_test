import { createSelector } from 'reselect';

const users = (state) => state.githubSearch.list.users;
const filter = (state) => state.githubSearch.filter.filter;

export const getFiltredByIdUsers = createSelector([users, filter], (list, id) => {
  if (!id) return list;
  
  return list.filter((item) => item.id === +id);
});

export const getFiltredByLoginUsers = createSelector([users, filter], (list, login) => {
  if (!login) return list;
  
  return list.filter((item) => item.login.startsWith(login.trim()));
});
