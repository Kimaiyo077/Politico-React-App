import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { shallow, mount, dispatch } from 'enzyme';

import LoginForm from '../LoginForm';

const setup = (props={}) => {
    return mount(
    <StaticRouter>
        <LoginForm {...props} />
    </StaticRouter>)
}

const findTestByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test("should render without error", () => {
    const wrapper = setup();
    const appComponent = findTestByAttr(wrapper, "component-login");
    expect(appComponent.length).toBe(1)
  });

test ("check email state of login ", () => {
    const wrapper = setup()
    const emailinput = findTestByAttr(wrapper, "email-input")
    emailinput.simulate("change", {
        target: {
            value: "isaac@gmail.com"
        }
    })

    expect(findTestByAttr(wrapper, "email-input").prop("value")).toBe("isaac@gmail.com")
});

test ("check password value of login ", () => {
    const wrapper = setup()
    const passwordinput = findTestByAttr(wrapper, "password-input")
    passwordinput.simulate("change", {
        target: {
            value: "password"
        }
    })

    expect(findTestByAttr(wrapper, "password-input").prop("value")).toBe("password")
});

describe('testing api', () => {
    beforeEach(() => {
      fetch.resetMocks();
    })
   
    test('api fetch mock call', () => {
        fetch.mockResponseOnce(JSON.stringify({User:{
            email: "isaac@kimaiyo.com",
            firstname: "Isaac",
            lastname: "Kimaiyo",
            nationalId: "987654321",
            passportUrl: "https://static.hudl.com/users/temp/2790466_fd6a67f8e4c547cda754f16fbf3af4d2.png",
            userId: "46"},
            status: 200,
            token: "eyJ0eXAiOiJKv2QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTA0MTYyMzcsImlhdCI6MTU1MDQxMjYzNywidXNlciI6Mzh9.339IaivCQgSHQfxD3F5-j9AxhfQBGuurB-BtUFr6_oo"
        }))

        const wrapper = setup()
        const formSubmit = findTestByAttr(wrapper, "form-submit")
        formSubmit.simulate("submit")
        
    
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://isaac-politico-api-heroku.herokuapp.com/api/v2/auth/login')
    })
  })
