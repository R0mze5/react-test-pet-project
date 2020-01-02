import React, { PureComponent } from 'react';

export class ReduxSaga extends PureComponent {
  state = {};

  componentDidMount() {
    const { getXkcdImageRequest } = this.props;

    getXkcdImageRequest();

    // .then(xkcd => this.setState({ xkcd }));

    // setInterval(() => {
    //   this.props.getXkcdImageRequest();
    // }, 3000);
  }

  render() {
    const { isLoading, content: xkcd } = this.props;

    if (isLoading === 'loading') {
      return <p>loading</p>;
    }
    if (isLoading === 'failure') {
      return <p>error</p>;
    }
    if (!xkcd) {
      return null;
    }

    return (
      <div>
        {isLoading === 'loading' ? (
          <p>Загрузка</p>
        ) : (
          <>
            <img alt={xkcd.alt} src={xkcd.img} />
            <p>{xkcd.transcript}</p>
          </>
        )}
      </div>
    );
  }
}

export default ReduxSaga;
