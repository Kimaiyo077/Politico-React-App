import React from 'react';
import { shallow } from 'enzyme';

import Parties from '../parties/Parties';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = shallow(<Parties />);
      const appComponent = wrapper.find("[data-test='component-party']");
      expect(appComponent.length).toBe(1)
    });
  });