import { DELETE_FAVORITE, SET_FAVORITE, LOGIN_REQUEST } from '../types/favorites';

export const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload,
});

export const deleteFavorite = payload => ({
  type: DELETE_FAVORITE,
  payload,
});

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});
