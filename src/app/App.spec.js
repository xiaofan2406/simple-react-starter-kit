/* global it, expect, describe, afterAll, beforeAll, afterEach, beforeEach */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('matches snapshots', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
