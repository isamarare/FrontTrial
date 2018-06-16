import * as CONSTANTS from './constants';

const initialState = {
  name: 'capicua'
}

export function auth(state = initialState, action) {
    switch (action.type) {
        
        case CONSTANTS.CHANGE_NAME:{
            return {
            ...state,name:action.payload.name
        } }
        default:
          return state
      }
}