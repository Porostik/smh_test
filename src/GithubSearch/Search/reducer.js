import { githubSearchTypes } from '../constants';

const initialState = {
  filter: '',
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case githubSearchTypes.setFilter:
      return {
        ...state,
        filter: action.paylod,
      };
    default:
      return state;
  }
};

export default userListReducer;
