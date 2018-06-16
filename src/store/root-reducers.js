import { combineReducers } from 'redux'
import { auth,registrationForm } from "./auth"
import { reducer as formReducer } from 'redux-form'

import {
    routerReducer,
  } from "react-router-redux";

export default combineReducers({
  auth:auth,
  router: routerReducer,
  form: formReducer
}

)