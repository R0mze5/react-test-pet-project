import React from 'react';

import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';
import { Router } from './Router';

const wrapper = mount(
  <StaticRouter context={{}} location={'/some-path'}>
    <Router />
  </StaticRouter>,
);

it('contain p with text : my router', () => {
  expect(wrapper.contains(<p>my router</p>)).toBeTruthy();
});
