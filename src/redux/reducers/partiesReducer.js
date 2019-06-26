import { GET_PARTIES } from '../actions/types';


const initialState = {
    parties: []
  };


export default function(state = initialState, action){
    switch(action.type){
            case GET_PARTIES:
                return {
                  ...state,
                  parties: action.payload
                };
            default: 
                return state;
    }
     
}