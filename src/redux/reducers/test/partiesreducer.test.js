import { GET_PARTIES } from '../../actions/types';
import partiesReducer from  '../partiesReducer';

test('should return an empty object as intial state', () => {
    const newState = partiesReducer(undefined, {});
    expect(newState).toEqual({
        parties : []
      });
});

test('should set state to a list of parties and', () => {
    const parties = [
      {
        partyId: 1,
        partyName: "Jubilee",
        logoUrl: "pic.com",
        hqAddrress: "Nairobi"
      }
    ];
  
    const newState = partiesReducer(undefined, {
      type: GET_PARTIES,
      payload: parties
    });
  
    expect(newState).toEqual({
      parties: parties
    });
  });
