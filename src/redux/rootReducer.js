import { combineReducers } from 'redux';
import { githubSearchReducer } from '../GithubSearch';

export const rootReducer = combineReducers({
  githubSearch: githubSearchReducer,
});
