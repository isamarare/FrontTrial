import { combineReducers } from 'redux'
import { auth } from "./auth"
import { brotherhood } from "./brotherhood"
import { reducer as formReducer } from 'redux-form'


import {
  routerReducer,
} from "react-router-redux";

export default combineReducers({
  auth: auth,
  router: routerReducer,
  form: formReducer,
  brotherhood: brotherhood,

}

)