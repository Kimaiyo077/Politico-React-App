import React from 'react';
import { shallow } from 'enzyme';

import NewOffice from '../offices/NewOffice';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = shallow(<NewOffice />);
      const appComponent = wrapper.find("[data-test='component-newoffice']");
      expect(appComponent.length).toBe(1)
    });
  });
