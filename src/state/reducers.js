import { combineReducers } from 'redux';
import { ON_CHANGE } from './actionTypes';
const initialLoginState = {
    username: '',
    password: ''
}
const login = (state = initialLoginState, action) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state
    }
}
export default combineReducers({login})