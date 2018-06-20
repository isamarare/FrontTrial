import * as CONSTANTS from "./constants"
import {APILOGIN} from '../../API'

export const postLogin = (formData) => async dispatch => {
  try {
    dispatch({
      type: CONSTANTS.POST_LOGIN_REQUEST,
      payload: {  }
    })
    const response = await APILOGIN.post('o/token/', formData)
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