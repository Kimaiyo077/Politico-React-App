import React from 'react';
import { shallow } from 'enzyme';

import Office from '../offices/Office';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = shallow(<Office />);
      const appComponent = wrapper.find("[data-test='component-offices']");
      expect(appComponent.length).toBe(1)
    });
  });
