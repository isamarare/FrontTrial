import * as CONSTANTS from "./constants"

export const changeName = text => {
return {  
  type: CONSTANTS.CHANGE_NAME,
  payload:{name:text}
}
}

