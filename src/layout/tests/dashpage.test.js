import React from 'react';
import { shallow } from 'enzyme';

import DashPage from '../DashPage';

const setup = (props={}, state=null) => {
    return shallow(<DashPage {...props} />)
}

const findTestByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


describe("Dashboard page should render without errors" , () => {
    test("Dashboard should contain a tag with data-test attribute", () => {
      const wrapper = setup();
      const appComponent = findTestByAttr(wrapper,"component-dashpage");
      expect(appComponent.length).toBe(1)
    });
  });