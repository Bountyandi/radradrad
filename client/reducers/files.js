import {
  //ADD_TERMINO,
  //SET_TERMINOS,
  //DELETE_TERMINO,
  //EDIT_TERMINO,
  ADD_TERMINOS,
} from '../actions/ActionsTypes'

const initialState = [];

const files = (state = initialState, action) => {

  switch (action.type) {



    case ADD_TERMINOS:
      return [...state, ...action.terminos];
//
  //  case SET_TERMINOS:
  //    return action.terminos;
//
  //  case ADD_TERMINO:
  //    return [
  //      action.termino,
  //      ...state
  //    ];
//
  //  case EDIT_TERMINO:
  //    return state.map( t => {
  //      if (t._id === action.termino._id) {
  //        return {...t, ...action.termino}
  //      }
  //      return t
  //    });
//
//
  //  case DELETE_TERMINO:
  //    return state.filter( t =>
  //      t._id !== action._id
  //    );
//
    default: return state
  }
};

export default files
