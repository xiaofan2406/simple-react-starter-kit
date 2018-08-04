import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import asyncLoad from '../asyncLoad';

afterEach(() => {
  jest.restoreAllMocks();
});

const MockComponent = () => <div>mock component</div>;

it('calls the importer function', () => {
  const params = {
    importer: () => Promise.resolve({ default: MockComponent }),
  };
  const importerSpy = jest.spyOn(params, 'importer');
  const AsyncComponent = asyncLoad(params);
  render(<AsyncComponent />);

  expect(importerSpy).toHaveBeenCalledTimes(1);
});

it('renders the imported component', async () => {
  const params = {
    importer: jest.fn().mockResolvedValue({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const setStateSpy = jest.spyOn(AsyncComponent.prototype, 'setState');

  const { getByText } = render(<AsyncComponent />);

  await waitForElement(() => getByText('mock component'));
  expect(setStateSpy).toHaveBeenCalledTimes(1);
});

it('skip setState if component is unmounted', async () => {
  const params = {
    importer: jest.fn().mockResolvedValue({ default: MockComponent }),
  };
  const AsyncComponent = asyncLoad(params);
  const setStateSpy = jest.spyOn(AsyncComponent.prototype, 'setState');

  const { unmount } = render(<AsyncComponent />);
  unmount();
  await params.importer();

  expect(setStateSpy).toHaveBeenCalledTimes(0);
});
