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

const initialUserState = {
    user: '',
    mail: '',
    dateCreation: ''
  }
  
export function registrationForm(state = initialUserState, action) {
    switch (action.type) {
        case CONSTANTS.REGISTRATION_FORM:{
            return {
            ...state,user:action.payload.user,mail:action.payload.mail,dateCreation:action.payload.dateCreation
        } }
        default:
          return state
      }
}