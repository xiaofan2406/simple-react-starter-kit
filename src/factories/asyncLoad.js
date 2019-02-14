import React from 'react';

const asyncLoad = ({ importer }) =>
  class AsyncLoad extends React.Component {
    unmounted = false;

    state = {
      Component: null,
    };

    componentDidMount() {
      importer()
        .then(({ default: Component }) => {
          if (!this.unmounted) {
            this.setState({ Component });
          }
        })
        .catch(console.error);
    }

    componentWillUnmount() {
      this.unmounted = true;
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };

export default asyncLoad;
