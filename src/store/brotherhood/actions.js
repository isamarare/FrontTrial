import * as CONSTANTS from "./constants"
import { APIAuth, APINoAuth } from "../../API";


export const postBrotherhood = text => {
  return {
    type: CONSTANTS.POST_BROTHERHOOD_REQUEST,
    payload: { name: text }
  }
}

export const getAllBrotherhoods = () => async dispatch => {
  try {
    dispatch({
      type: CONSTANTS.GET_ALL_BROTHERHOOD_REQUEST,
      payload: {}
    })
    const response = await APINoAuth.get('brotherhood/')
    dispatch({
      type: CONSTANTS.GET_ALL_BROTHERHOOD_SUCCESS,
      payload: { response }
    })
  } catch (error) {
    dispatch({
      type: CONSTANTS.GET_ALL_BROTHERHOOD_FAILURE,
      payload: { error }
    })
  }

}


export const addBrotherhood = (formData) => async dispatch => {
  try {
    dispatch({
      type: CONSTANTS.POST_BROTHERHOOD_REQUEST,
      payload: {}
    })
    const response = await APINoAuth.post('brotherhood/', formData)
    dispatch({
      type: CONSTANTS.POST_BROTHERHOOD_SUCCESS,
      payload: { response }
    })
  } catch (error) {
    dispatch({
      type: CONSTANTS.POST_BROTHERHOOD_FAILURE,
      payload: { error }
    })
  }

}

export const deleteBrotherhood = (id) => async dispatch => {
  try {
    dispatch({
      type: CONSTANTS.DELETE_BROTHERHOOD_REQUEST,
      payload: {}
    })
    await APIAuth.delete(`brotherhood/${id}/`)
    dispatch({
      type: CONSTANTS.DELETE_BROTHERHOOD_SUCCESS,
      payload: { id }
    })
  } catch (error) {
    dispatch({
      type: CONSTANTS.DELETE_BROTHERHOOD_FAILURE,
      payload: { error }
    })
  }
}


export const updateBrotherhood = (id, formData, token) => async dispatch => {
  try {
    dispatch({
      type: CONSTANTS.PUT_BROTHERHOOD_REQUEST,
      payload: {}
    })
    const response = await APIAuth.patch(`brotherhood/${id}/`, formData)
    dispatch({
      type: CONSTANTS.PUT_BROTHERHOOD_SUCCESS,
      payload: { response }
    })
  } catch (error) {
    dispatch({
      type: CONSTANTS.PUT_BROTHERHOOD_FAILURE,
      payload: { error }
    })
  }
}

