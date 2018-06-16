import { combineReducers } from 'redux'
import { auth,registrationForm } from "./auth"

import {
    routerReducer,
  } from "react-router-redux";

export default combineReducers({
  auth:auth,
  user:registrationForm,
  router: routerReducer
}

)