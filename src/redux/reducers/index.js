import { combineReducers } from 'redux';
import postOfficeReducer from  './postOffice';
import partiesReducer from './partiesReducer';


export default combineReducers({
    offices: postOfficeReducer,
    parties: partiesReducer
}); 