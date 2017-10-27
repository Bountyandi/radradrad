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



    default: return state
  }
};

export default files
