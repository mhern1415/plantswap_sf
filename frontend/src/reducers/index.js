import { combineReducers } from 'redux';
import authReducer from './authReducer';
import contactReducer from './contactReducer'

export default combineReducers({
    auth: authReducer,
    contactReducer
});