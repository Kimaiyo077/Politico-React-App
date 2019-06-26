import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../dashboard/Dashboard';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = shallow(<Dashboard />);
      const appComponent = wrapper.find("[data-test='component-dashboard']");
      expect(appComponent.length).toBe(1)
    });
  });
