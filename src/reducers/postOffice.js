import { NEW_OFFICE, GET_OFFICES } from '../actions/types';


const initialState = {
    offices: [],
    office: []
  };


export default function(state = initialState, action){
    switch(action.type){
            case GET_OFFICES:
                return {
                  ...state,
                  offices: action.payload
                };
            case NEW_OFFICE:
                return{
                    ...state,
                    office: action.payload  
                } 

            default: 
                return state;
    }
     
}