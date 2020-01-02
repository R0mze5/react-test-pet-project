import React, { PureComponent } from 'react';

// import { createCommment } from "../../redux/actions/actions";

// export const Page = props => {
//   console.log(props);
//   props.dispatch(createCommment("asd"));
//   props.dispatch(createCommment("assd"));
//   return <div>test</div>;
// };

export const Header = ({ className, children }) => <h1 className={className}> {children} </h1>;

export class TestingPage extends PureComponent {
  state = {
    value: 'test_state_value',
  };

  handleClick = () => {
    // props.dispatch({ type: "CREATE_COMMENT", payload: "sada" });

    this.setState({ value: 'assd' });
  };

  render() {
    // const { value } = this.state;
    return (
      <div className={'header__wrapper'} name={'test'} onClick={this.handleClick}>
        <Header className={'header'}>commentsActionsonClick</Header>
        <p className={'header__additional'} data-name={'test'}>
          {this.state.value}
        </p>
        <p>String</p>
      </div>
    );
  }
}

export default TestingPage;
