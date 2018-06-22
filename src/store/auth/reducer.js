import * as CONSTANTS from './constants';

const initialState = {
    all: [],
    isLogged: false,
    isLoading: false,
    token: "",
    error: []
}

export function auth(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.POST_LOGIN_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }
        case CONSTANTS.POST_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLogged: true,
                all: action.payload.response.data,
                token: action.payload.response.data.access_token
            }
        }
        case CONSTANTS.POST_LOGIN_FAILURE: {
            return {
                ...state, isLoading: false, error: action.payload.error.response.status
            }
        }

        case CONSTANTS.POST_LOGOUT_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }
        case CONSTANTS.POST_LOGOUT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLogged: false,
                token: "",
                all: []
            }
        }
        case CONSTANTS.POST_LOGOUT_FAILURE: {
            return {
                ...state, isLoading: false
            }
        }
        default:
            return state
    }
}
