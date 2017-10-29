import {
  SET_CANDIDATES,
  PUT_CANDIDATE,
  DELETE_CANDIDATE
} from '../actions/actionsTypes'

import Immutable from 'immutable'


const initialState = Immutable.List([]);

const candidates = (state = initialState, action) => {

  switch (action.type) {

    case SET_CANDIDATES:
      return state.concat(action.candidates);

    case PUT_CANDIDATE:
      return state.map(c => {
        if (c._id === action.candidate._id) {
          return {...c, ...action.candidate}
        }
        return c;
      });

    case DELETE_CANDIDATE:
      return state.filter( c => c._id !== action._id );

    default:
      return state
  }
};

export default candidates
