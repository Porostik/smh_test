import { githubSearchTypes } from '../constants';

export const setIdFilter = (id) => ({
  type: githubSearchTypes.setIdFilter,
  paylod: id,
});
