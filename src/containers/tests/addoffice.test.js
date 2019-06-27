import React from 'react';
import { mount, shallow } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import ConnectedAddOffice, { AddOffice } from '../AddOffice';


const setup = (props = {}) => {
    return mount(
        <StaticRouter>
            <AddOffice {...props}/>
        </StaticRouter>
    );
};

const findTestByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe('Testing adding Offices Page', () => {
    test('should render without error', () => {
        const wrapper = setup();
        const appComponent = findTestByAttr(wrapper, "component-office");
        expect(appComponent.length).toBe(1)
      });
    
    test ("Check Office name input is recieved", () => {
        const wrapper = setup()
        const emailinput = findTestByAttr(wrapper, "name-input")
        emailinput.simulate("change", {
            target: {
                value: "Nasa"
            }
        })
    
        expect(findTestByAttr(wrapper, "name-input").prop("value")).toBe("Nasa")
    });

    test ("Check Office type input is recieved", () => {
        const wrapper = setup()
        const emailinput = findTestByAttr(wrapper, "type-input")
        emailinput.simulate("change", {
            target: {
                value: "Federal"
            }
        })
    
        expect(findTestByAttr(wrapper, "type-input").prop("value")).toBe("Federal")
    });
})