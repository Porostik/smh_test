import { githubSearchTypes } from '../constants';

const initialState = {
  idFilter: '',
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case githubSearchTypes.setIdFilter:
      return {
        ...state,
        idFilter: action.paylod,
      };
    default:
      return state;
  }
};

export default userListReducer;
