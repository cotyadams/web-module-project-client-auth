import { combineReducers } from 'redux';
import { ON_CHANGE, ON_SUBMIT } from './actionTypes';
const initialLoginState = {
    username: '',
    password: '',
    data: {}
}
const login = (state = initialLoginState, action) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case ON_SUBMIT:
            return {
                ...state,
            }
        default:
            return state
    }
}
export default combineReducers({login})