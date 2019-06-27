import axios from 'axios';


const baseUrl = 'https://isaac-politico-api-heroku.herokuapp.com/api/v2'

export const getItems = (url, type, headers) => {
        return dispatch => axios.get(baseUrl + url,{headers: headers})
        .then(parties => {
            dispatch(
                {
                    type: type,
                    payload: parties.data.data
                }
            )
        }

        )
};