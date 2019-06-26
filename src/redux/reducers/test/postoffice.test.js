import { GET_OFFICES, NEW_OFFICE } from '../../actions/types';
import postOfficeReducer from  '../postOffice';


test("Return object with empty offices array as initial state", () => {
    const newState = postOfficeReducer(undefined, {});
  
    expect(newState).toEqual({
      offices: [],
      office: []
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
      offices: officeList,
      office: []
    });
  });

  test("should set state to office list", () => {
    const officeList = [
      {
        id: 1,
        officeName: "President",
        officeType: "Federal"
      }
    ];
  
    const newState = postOfficeReducer(undefined, {
      type: NEW_OFFICE,
      payload: officeList
    });
  
    expect(newState).toEqual({
      offices: [],
      office: officeList
    });
  });