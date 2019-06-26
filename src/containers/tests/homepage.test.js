import React from 'react';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe("App should contain routes", () => {
    test("should render without error", () => {
      const wrapper = mount(
        <StaticRouter>
            <HomePage />
        </StaticRouter>);
      const homeComponent = wrapper.find("[data-test='component-homepage']");
      expect(homeComponent.length).toBe(1)
    });
    test("should contain a section with dataset value of component-section", () => {
        const wrapper = mount(
          <StaticRouter>
              <HomePage />
          </StaticRouter>);
        const homeComponent = wrapper.find("[data-test='component-section']");
        expect(homeComponent.length).toBe(1)
      });
  });