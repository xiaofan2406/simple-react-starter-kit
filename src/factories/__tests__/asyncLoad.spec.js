import React from 'react';
import { mount } from 'enzyme';

import asyncLoad from '../asyncLoad';

afterEach(() => {
  jest.restoreAllMocks();
});

it('should call the importer function', () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: () => Promise.resolve({ default: MockComponent }),
  };
  const importerSpy = jest.spyOn(params, 'importer');
  const AsyncComponent = asyncLoad(params);
  mount(<AsyncComponent />);

  expect(importerSpy).toHaveBeenCalledTimes(1);
});

it('should return a stateful component', () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: () => Promise.resolve({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const wrapper = mount(<AsyncComponent />);

  expect(wrapper.state()).toBeDefined();
});

it('should render the component in its state', () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: () => Promise.resolve({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const wrapper = mount(<AsyncComponent />);
  // // enzyme doesn't call setState in lifecycles hooks?
  wrapper.setState({ Component: MockComponent });

  expect(wrapper.find(MockComponent).text()).toBe('mock component');
});

it('should pass on its props to the wrapped component', () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: () => Promise.resolve({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const wrapper = mount(<AsyncComponent someProp="someProp" />);
  wrapper.setState({ Component: MockComponent });

  expect(wrapper.find(MockComponent).prop('someProp')).toBe('someProp');
});
