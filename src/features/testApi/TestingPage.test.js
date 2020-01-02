import React from 'react';
// import {Rea} from 'react-dom'

import { mount /* , shallow */, render } from 'enzyme';
import { TestingPage, Header } from './TestingPage';

// моунт полностью примонтирует все дочерние компоненты
// shallow отобрадит текущую компоненту
// render делает статический рендер и обращение происходит через jquery синтаксис
// при render начинается работа, библиотеки cherrio - jQuery для nodejs для backend

// describe.only - будет работать только этот describe
// describe.skip - пропуск этого describe

// describe.skip('Page component', () => {
describe('Page component', () => {
  const wrapper = mount(<TestingPage />);

  // console.log(wrapper.html());
  // console.log(wrapper.debug());

  wrapper.setState({ newValue: 'someValue' });
  wrapper.setProps({ newProps: 'someProps' });

  it('check state', () => {
    expect(wrapper.state()).toStrictEqual({
      value: 'test_state_value',
      newValue: 'someValue',
    });
  });

  it('check handleClick', () => {
    wrapper.instance().handleClick = jest.fn;

    wrapper.find('.header__wrapper').simulate('click');

    expect(wrapper.state()).toStrictEqual({
      value: 'assd',
      newValue: 'someValue',
    });
  });

  describe('Class methods', () => {
    describe('render', () => {
      it('содержит div.header__wrapper', () => {
        expect(wrapper.find('.header__wrapper')).toHaveLength(1);
      });

      it('содержит name = test', () => {
        expect(wrapper.find('[name="test"]')).toHaveLength(1);
      });

      it('содержит компонент Header', () => {
        expect(wrapper.find(Header)).toHaveLength(1);
      });

      it('содержит <p> со значением из stateb', () => {
        const p = wrapper.find('.header__additional');
        expect(p.props().children).toEqual(wrapper.state().value);
      });

      it('содержит <p> со значением String', () => {
        const pElement = wrapper.findWhere(
          el => el.props().children === 'String' && el.type() === 'p',
        );
        expect(pElement).toHaveLength(1);
      });
    });
  });
});

describe('Page component enzyme.render', () => {
  const wrapper = render(<TestingPage />);
  console.log(wrapper.find('.header__additional').data('name'));
  it('tesr', () => {});
});
