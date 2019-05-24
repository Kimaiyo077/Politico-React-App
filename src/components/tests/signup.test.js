import React from 'react';
import { shallow } from 'enzyme';

import Signup from '../Signup';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = shallow(<Signup />);
      const appComponent = wrapper.find("[data-test='component-signup']");
      expect(appComponent.length).toBe(1)
    });
  });