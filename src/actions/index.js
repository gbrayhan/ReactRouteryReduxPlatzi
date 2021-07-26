import { DELETE_FAVORITE, SET_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, GET_VIDEO_SOURCE, RESET_VIDEO_SOURCE } from '../types/favorites';

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

export const logoutRequest = payload => ({
  type: LOGOUT_REQUEST,
  payload,
});

export const registerRequest = payload => ({
  type: REGISTER_REQUEST,
  payload,
});

export const getVideoSource = payload => ({
  type: GET_VIDEO_SOURCE,
  payload,
});

export const resetVideoSource = payload => ({
  type: RESET_VIDEO_SOURCE,
  payload,
});
