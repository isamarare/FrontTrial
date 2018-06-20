import * as CONSTANTS from './constants';

const initialState = {
  all: [],
  isLoading:false
}

export function auth(state = initialState, action) {
    switch (action.type) {
        
        case CONSTANTS.POST_LOGIN_REQUEST:{
            return {
            ...state,isLoading:true
        } }
        case CONSTANTS.POST_LOGIN_SUCCESS:{
            return {
            ...state,
            isLoading:false,
            all:action.payload.response.data
        } }
        case CONSTANTS.POST_LOGIN_FAILURE:{
            return {
            ...state,isLoading:false
        } }
        default:
          return state
      }
}