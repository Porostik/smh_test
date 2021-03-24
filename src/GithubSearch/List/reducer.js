import { githubListTypes } from '../constants';

const initialState = {
  users: [],
  loading: false,
  error: false,
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case githubListTypes.startLoading:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case githubListTypes.errorLoading:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case githubListTypes.successLoading:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userListReducer;
