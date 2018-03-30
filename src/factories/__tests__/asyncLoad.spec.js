import React from 'react';
import { mount } from 'enzyme';

import asyncLoad from '../asyncLoad';

afterEach(() => {
  jest.restoreAllMocks();
});

it('calls the importer function', () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: () => Promise.resolve({ default: MockComponent }),
  };
  const importerSpy = jest.spyOn(params, 'importer');
  const AsyncComponent = asyncLoad(params);
  mount(<AsyncComponent />);

  expect(importerSpy).toHaveBeenCalledTimes(1);
});

it('renders the imported component', async () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: jest.fn().mockResolvedValue({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const wrapper = mount(<AsyncComponent />);
  await params.importer();
  wrapper.update();
  expect(wrapper.find(MockComponent).text()).toBe('mock component');
});

it('cancels the request if component is unmounted', async () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: jest.fn().mockResolvedValue({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const wrapper = mount(<AsyncComponent />);
  wrapper.instance().componentWillUnmount();
  await params.importer();
  wrapper.update();

  expect(wrapper.find(MockComponent)).toHaveLength(0);
});

it('passes on its props to the wrapped component', async () => {
  const MockComponent = () => <div>mock component</div>;
  const params = {
    importer: jest.fn().mockResolvedValue({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const wrapper = mount(<AsyncComponent someProp="someProp" />);
  await params.importer();
  wrapper.update();
  expect(wrapper.find(MockComponent).prop('someProp')).toBe('someProp');
});
