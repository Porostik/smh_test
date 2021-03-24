import { combineReducers } from 'redux';
import UsersListRenderer from './List/reducer';
import FilterReducer from './Search/reducer';

const githubSearchReducer = combineReducers({
  list: UsersListRenderer,
  filter: FilterReducer,
});

export default githubSearchReducer;
