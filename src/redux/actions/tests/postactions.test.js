import React from 'react';
import { shallow } from 'enzyme';

import { fetchOffices, addOffice } from '../postActions';

describe('testing api', () => {
    beforeEach(() => {
      fetch.resetMocks();
    })
   
    test('api fetch mock call', () => {

        const officeList = [{
            id: 1,
            officeName: "President",
            officeType: "Federal"
          },
          {
            id: 2,
            officeName: "Deputy President",
            officeType: "Federal"
        }]

        fetch.mockResponseOnce(JSON.stringify({officeList}))
        
        fetchOffices(officeList)
    
        //expect(fetch.mock.calls.length).toEqual(1)
        //expect(fetch.mock.calls[0][0]).toEqual('https://isaac-politico-api-heroku.herokuapp.com/api/v2/auth/login')
    })
  })
