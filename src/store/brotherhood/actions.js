import * as CONSTANTS from "./constants"
import { API } from "../../API";


export const postBrotherhood = text => {
  return {  
    type: CONSTANTS.POST_BROTHERHOOD_REQUEST,
    payload:{name:text}
  }
  }

  export const getAllBrotherhoods = () => async dispatch => {
    try {
      dispatch({
        type:CONSTANTS.GET_ALL_BROTHERHOOD_REQUEST,
        payload:{}
      })
    const response = await API.get('brotherhood/')      
    dispatch({
      type:CONSTANTS.GET_ALL_BROTHERHOOD_SUCCESS,
      payload:{response}
    })
  } catch (error) {
    dispatch({
      type:CONSTANTS.GET_ALL_BROTHERHOOD_FAILURE,
      payload:{error}
    })
    }
    
    }

    
  export const addBrotherhood = (formData) => async dispatch => {
    try {
      dispatch({
        type:CONSTANTS.POST_BROTHERHOOD_REQUEST,
        payload:{}
      })
    const response = await API.post('brotherhood/',formData)      
    dispatch({
      type:CONSTANTS.POST_BROTHERHOOD_SUCCESS,
      payload:{response}
    })
  } catch (error) {
    dispatch({
      type:CONSTANTS.POST_BROTHERHOOD_FAILURE,
      payload:{error}
    })
    }
    
    }

    export const deleteBrotherhood = (id) => async dispatch => {
      try {
        dispatch({
          type:CONSTANTS.DELETE_BROTHERHOOD_REQUEST,
          payload:{}
        })
      const response = await API.delete(`brotherhood/${id}/`)
      dispatch({
        type:CONSTANTS.DELETE_BROTHERHOOD_SUCCESS,
        payload:{id}
      })
    } catch (error) {
      dispatch({
        type:CONSTANTS.DELETE_BROTHERHOOD_FAILURE,
        payload:{error}
      })
      }
      
      }


    export const updateBrotherhood = (id,formData) => async dispatch => {
    try {
      dispatch({
        type:CONSTANTS.PUT_BROTHERHOOD_REQUEST,
        payload:{}
      })
    const response = await API.patch(`brotherhood/${id}/`,formData)      
    dispatch({
      type:CONSTANTS.PUT_BROTHERHOOD_SUCCESS,
      payload:{response}
    })
  } catch (error) {
    dispatch({
      type:CONSTANTS.PUT_BROTHERHOOD_FAILURE,
      payload:{error}
    })
    }
  
  
  
  }

