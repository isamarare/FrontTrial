import * as CONSTANTS from './constants';

const initialState = {
    all: [],
    isLoading: false,
    isAdded: false
}

export function brotherhood(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.GET_ALL_BROTHERHOOD_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }
        case CONSTANTS.GET_ALL_BROTHERHOOD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                all: action.payload.response.data, isAdded: false
            }
        }
        case CONSTANTS.GET_ALL_BROTHERHOOD_FAILURE: {
            return {
                ...state, isLoading: false, isAdded: false
            }
        }
        case CONSTANTS.POST_BROTHERHOOD_SUCCESS: {
            return {
                ...state, all: state.all.concat(action.payload.response.data), isAdded: true
            }
        }
        case CONSTANTS.DELETE_BROTHERHOOD_SUCCESS: {
            return {
                ...state, all: state.all.filter(_brotherhood => _brotherhood.id !== action.payload.id), isAdded: false
            }
        }
        case CONSTANTS.PUT_BROTHERHOOD_SUCCESS: {
            return {
                ...state, all: state.all.map(_brotherhood => {
                    if (_brotherhood.id === action.payload.response.data.id) {
                        return action.payload.response.data
                    } else {
                        return _brotherhood
                    }
                }), isAdded: false
            }
        }
        default:
            return state
    }
}