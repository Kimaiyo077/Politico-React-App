import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = shallow(<Home />);
      const appComponent = wrapper.find("[data-test='component-home']");
      expect(appComponent.length).toBe(1)
    });
  });