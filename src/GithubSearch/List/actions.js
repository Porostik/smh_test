import { githubListTypes, apiUrl } from '../constants';

export const getUsersFetch = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const responce = await fetch(apiUrl);
    const users = await responce.json();
    dispatch(successLoading(users));
  } catch (e) {
    dispatch(errorLoading());
  }
};

const startLoading = () => ({
  type: githubListTypes.startLoading,
});

const errorLoading = () => ({
  type: githubListTypes.errorLoading,
});

const successLoading = (users) => ({
  type: githubListTypes.successLoading,
  payload: users,
});
