import React, { Component } from 'react';

// const a = [ 0 ]
// a.push(1)
// // a = [ 0, 1 ] - мутация

// let b = []
// b = [...b, 1]
// // b = [ 0, 1 ] - трансформация

// // shallow merge - поверхностное слияние
// const currentState = {a:1 ,b:2 , c: {d: 1, e: 2}}
// const patch = {b: 3, c: {e: 3}}
// const newState = {...currentState, ...patch} // {a:1 ,b:3 , c: {e: 3}} - т.к. реакт не проверят рекурсивно приходящие ключи,  для сляния внутри объектов надо использовать spread оператор

// stateless компонента ведет себя так же, как и обычная компонента

// мутации быстрее трансформации, т.к. трансформации подразумевают удаление старого объекта и создание нового

// pureComponet сравнивает не поменялись ли props (shallow equal - поверхностное сравнение: )
export class Lifecycle extends Component {
  static defaultProps = {};

  // div = React.createRef();

  state = { creditCardInput: this.props.creditCard, input: '' };

  constructor(props) {
    super(props);

    this.div = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      creditCardInput: nextProps.creditCard
        .toString()
        .replace(/(\d{0,4})/g, '$1 ')
        .trim(),
    };
  }

  componentDidMount() {
    console.log(this.div.current.getBoundingClientRect()); // декларативный подход
    // console.log(document.querySelector('#div').getBoundingClientRect()); // императивный подход - мы работаем со строкой => выше вероятность ошибки
    // техника назвается state leaft up- подятие до state
    // все в мире реакта должно быть декларативно, а контроль за инпутами должен быть на уровне state - больше контроля
  }

  // componentWillUnmount() {
  //   // return true
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentDidCatch(error, errorInfo){
  //   // лучше всего делать в родительской компоненте
  // // rollbar.com - сервис для сбора ошибок
  // }

  // deplicated:

  // componentWillReceiveProps(nextProps) {

  // }

  // componentWillMount() {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  handleChange = e => {
    // react way - вытаскивать всё в state
    const { name, value } = e.target;
    this.setState(state => ({ [name]: value }));
    // this.setState(state => ({[name]: value}), callback() => {}) // можно будет передать callback, который будет применен, когда setstate выполнится
  };

  showEvent = e => {
    console.log(e.nativeEvent);
  };

  render() {
    const { creditCardInput, input } = this.state;
    // return <div ref={с => this.div = c}>{creditCardInput}</div>; // старый способ задания ref
    return (
      <div ref={this.div} onClick={this.showEvent}>
        {creditCardInput}
        <input name={'input'} onChange={this.handleChange} type={'text'} value={input} />
      </div>
    );
  }
}

export default Lifecycle;
