import axios from 'axios';
import { GET_PARTIES } from './types';

const headers = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`
}
export const fetchParties = () => dispatch => {
        return axios.get('https://isaac-politico-api-heroku.herokuapp.com/api/v2/parties',
        {
                headers: headers
        })
        .then(parties => 
                dispatch({
                        type: GET_PARTIES,
                        payload: parties.data.data
                })
        )
};
