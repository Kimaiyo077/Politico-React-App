import { GET_OFFICES } from '../../actions/types';
import postOfficeReducer from  '../postOffice';


test("Return object with empty offices array as initial state", () => {
    const newState = postOfficeReducer(undefined, {});
  
    expect(newState).toEqual({
      offices: []
    });
  });


  test("should set state to a list of offices", () => {
    const officeList = [
      {
        id: 1,
        officeName: "President",
        officeType: "Federal"
      },
      {
        id: 2,
        officeName: "Deputy President",
        officeType: "Federal"
      }
    ];
  
    const newState = postOfficeReducer(undefined, {
      type: GET_OFFICES,
      payload: officeList
    });
  
    expect(newState).toEqual({
      offices: officeList
    });
  });