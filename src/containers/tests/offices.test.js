import React from "react";
import { shallow } from "enzyme";

import { Offices }  from '../Offices';

const findTestByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


describe('', () => {
    test('should ', () => {
        const fetchOffices = jest.fn()
        const items =[{
            officeId: 1,
            officeName: "Jubilee",
            officeType: "pic.com",
        }] 
        const wrapper = shallow(<Offices fetchOffices={fetchOffices} items={items}/>)
        const partyComponent = findTestByAttr(wrapper, "component-offices");
        expect(partyComponent.length).toBe(1)
    })
})