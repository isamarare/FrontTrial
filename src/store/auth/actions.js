import * as CONSTANTS from "./constants"

export const changeName = text => {
return {  
  type: CONSTANTS.CHANGE_NAME,
  payload:{name:text}
}
}

export const registrationForm = text => {
  return {  
    type: CONSTANTS.REGISTRATION_FORM,
    payload:{user:text},
    payload:{mail:text},
    payload:{dateCreation:text}
  }
  }

