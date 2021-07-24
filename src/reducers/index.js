import { DELETE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST, SET_FAVORITE } from '../types/favorites';

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

    default:
      return state;
  }

};

export default reducer;
