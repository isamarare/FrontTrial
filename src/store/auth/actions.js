import * as CONSTANTS from "./constants"
import { APINoAuth, setAuthorizationToken } from '../../API'

export const postLogin = (formData) => async dispatch => {
  try {
    dispatch({
      type: CONSTANTS.POST_LOGIN_REQUEST,
      payload: {}
    })
    const response = await APINoAuth.post('o/token/', formData)
    setAuthorizationToken(response.data.access_token)
    dispatch({
      type: CONSTANTS.POST_LOGIN_SUCCESS,
      payload: { response }
    }
    )
  } catch (error) {
    dispatch({
      type: CONSTANTS.POST_LOGIN_FAILURE,
      payload: { error }
    })
  }

}

export const postLogout = (formData) => async dispatch => {
  try {
    dispatch({
      type: CONSTANTS.POST_LOGOUT_REQUEST,
      payload: {}
    })
    setAuthorizationToken()
    dispatch({
      type: CONSTANTS.POST_LOGOUT_SUCCESS,
      payload: {}
    }
    )
  } catch (error) {
    dispatch({
      type: CONSTANTS.POST_LOGOUT_FAILURE,
      payload: { error }
    })
  }

}

