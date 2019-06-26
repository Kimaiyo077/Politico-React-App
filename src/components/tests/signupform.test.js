import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import SignupForm from '../auth/SignupForm';

const setup = (props={}) => {
    return mount(
    <StaticRouter>
        <SignupForm {...props} />
    </StaticRouter>)
}

const findTestByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

const simulator = (attrr, sim, val) => {
    attrr.simulate(sim, {
        target: {
            value: val
        }
    })
}

test("should render without error", () => {
    const wrapper = setup();
    const signUpComponent = findTestByAttr(wrapper, "component-signup");
    expect(signUpComponent.length).toBe(1)
  });


describe("test changes in state", () => {
    test ("check password value of login ", () => {
        const wrapper = setup()
        const passwordinput = findTestByAttr(wrapper, "password-input")
        simulator(passwordinput, "change", "password")
        expect(findTestByAttr(wrapper, "password-input").prop("value")).toBe("password")
    });
    test ("check firstname value of login ", () => {
        const wrapper = setup()
        const firstnameinput = findTestByAttr(wrapper, "firstname-input")
        simulator(firstnameinput, "change", "isaac")
        expect(findTestByAttr(wrapper, "firstname-input").prop("value")).toBe("isaac")
    });
    test ("check lastname value of login ", () => {
        const wrapper = setup()
        const lastnameinput = findTestByAttr(wrapper, "lastname-input")
        simulator(lastnameinput, "change", "Kimaiyo")
        expect(findTestByAttr(wrapper, "lastname-input").prop("value")).toBe("Kimaiyo")
    });
    test ("check email value of login ", () => {
        const wrapper = setup()
        const emailinput = findTestByAttr(wrapper, "email-input")
        simulator(emailinput, "change", "email@kimaiyo.com")
        expect(findTestByAttr(wrapper, "email-input").prop("value")).toBe("email@kimaiyo.com")
    });
    test ("check passport value of login ", () => {
        const wrapper = setup()
        const passportinput = findTestByAttr(wrapper, "passport-input")
        simulator(passportinput, "change", "passporturl")
        expect(findTestByAttr(wrapper, "passport-input").prop("value")).toBe("passporturl")
    });
    test ("check id value of login ", () => {
        const wrapper = setup()
        const idinput = findTestByAttr(wrapper, "nationalid-input")
        simulator(idinput, "change", "00980898989")
        expect(findTestByAttr(wrapper, "nationalid-input").prop("value")).toBe("00980898989")
    });
    test ("check phone number value of login ", () => {
        const wrapper = setup()
        const numberinput = findTestByAttr(wrapper, "number-input")
        simulator(numberinput, "change", "078988889")
        expect(findTestByAttr(wrapper, "number-input").prop("value")).toBe("078988889")
    });
    test ("check othername value of login ", () => {
        const wrapper = setup()
        const othernameinput = findTestByAttr(wrapper, "othername-input")
        simulator(othernameinput, "change", "Kibiwot")
        expect(findTestByAttr(wrapper, "othername-input").prop("value")).toBe("Kibiwot")
    });
    test ("check confirm password value of login ", () => {
        const wrapper = setup()
        const cpasswordinput = findTestByAttr(wrapper, "cpassword-input")
        simulator(cpasswordinput, "change", "password")
        expect(findTestByAttr(wrapper, "cpassword-input").prop("value")).toBe("password")
    });
});

describe("Fetch api calls for signup", () =>{
    beforeEach(() => {
        fetch.resetMocks();
      })
    test("check for fetch call when form is submitted", () => {
        fetch.mockResponseOnce(JSON.stringify({User:{
            email: "isaac@kimaiyo.com",
            firstname: "Isaac",
            lastname: "Kimaiyo",
            nationalId: "987654321",
            passportUrl: "https://static.hudl.com/users/temp/2790466_fd6a67f8e4c547cda754f16fbf3af4d2.png",
            userId: "46"},
            status: 201,
            token: "eyJ0eXAiOiJKv2QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTA0MTYyMzcsImlhdCI6MTU1MDQxMjYzNywidXNlciI6Mzh9.339IaivCQgSHQfxD3F5-j9AxhfQBGuurB-BtUFr6_oo"
        }))

        const wrapper = setup()
        const formSubmit = findTestByAttr(wrapper, "form-submit")
        formSubmit.simulate("submit")
        
    
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://isaac-politico-api-heroku.herokuapp.com/api/v2/auth/signup')
    });
});