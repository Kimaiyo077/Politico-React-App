import { NEW_OFFICE, GET_OFFICES } from './types';

export const fetchOffices = () => dispatch => {
    fetch(`https://isaac-politico-api-heroku.herokuapp.com/api/v2/offices`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })

      .then(res => res.json())
      .then(offices =>
        dispatch({
          type: GET_OFFICES,
          payload: offices.data
        })
      );
  };


export const addOffice = (officeData) => dispatch => {
    fetch('https://isaac-politico-api-heroku.herokuapp.com/api/v2/offices',{
        method : 'POST',
        headers : {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body : JSON.stringify(officeData)
    }) 

        .then((res) => {
            return res.json()
        })

        .then((office) => dispatch({
            type: NEW_OFFICE,
            payload: office
            
        }))

        .catch((error) => console.log(error))

}; 
