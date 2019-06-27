import axios from 'axios';
import { fetchParties } from '../getActions';
import { mockStore } from '../../../mockStore';

jest.spyOn(axios, 'get')

test('should fetch parties from API', () => {
    const data = {'data' : {
        'data' : [{
            hqAddress: "Jubilee House, Nairobi",
            logoUrl: "https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            partyId: 1,
            partyName: "Jubillee"
        }]
    }}
    axios.get.mockImplementation(() =>
        Promise.resolve({
            data
        })
    );

    const store = mockStore();

    return store.dispatch(fetchParties()).then(() => {
        const newState = store.getState();

        expect(newState.parties).toEqual({
            parties : data.data
        })
    })
});
