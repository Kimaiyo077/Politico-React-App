import React from 'react';
import { shallow } from 'enzyme';

import Login from '../Login';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = shallow(<Login />);
      const appComponent = wrapper.find("[data-test='component-login']");
      expect(appComponent.length).toBe(1)
    });
  });