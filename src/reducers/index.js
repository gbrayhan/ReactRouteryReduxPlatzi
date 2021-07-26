import { DELETE_FAVORITE, GET_VIDEO_SOURCE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, SET_FAVORITE, RESET_VIDEO_SOURCE } from '../types/favorites';

const reducer = (state, action) => {

  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.filter((item => (item.id !== action.payload))),
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_REQUEST:
      return { ...state, user: {} };
    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case GET_VIDEO_SOURCE:
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          null };
    case RESET_VIDEO_SOURCE:
      return {
        ...state,
        playing: null };
    default:
      return state;
  }

};

export default reducer;
