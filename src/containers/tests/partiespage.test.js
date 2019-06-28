import React from "react";
import { shallow } from "enzyme";

import { PartiesPage }  from '../PartiesPage';

const findTestByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


describe('', () => {
    test('should ', () => {
        const fetchParties = jest.fn()
        const items =[{
            partyId: 1,
            partyName: "Jubilee",
            logoUrl: "pic.com",
            hqAddrress: "Nairobi"
        }] 
        const wrapper = shallow(<PartiesPage fetchParties={fetchParties} items={items}/>)
        const partyComponent = findTestByAttr(wrapper, "component-party");
        expect(partyComponent.length).toBe(1)
    })
})