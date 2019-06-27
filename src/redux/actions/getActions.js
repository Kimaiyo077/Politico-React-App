import { GET_PARTIES } from './types';
import { getItems } from '../helpers/helpers'



const headers = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("token")}`
}

export const fetchParties = () => {
        const url = '/parties'
        return getItems( url, GET_PARTIES, headers)
};
