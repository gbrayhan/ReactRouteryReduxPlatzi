import { SET_FAVORITE } from '../types/favorites';

// eslint-disable-next-line import/prefer-default-export
export const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload,
});
