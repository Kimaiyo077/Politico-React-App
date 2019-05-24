import { combineReducers } from 'redux';
import postOfficeReducer from  './postOffice';


export default combineReducers({
    offices: postOfficeReducer
}); 