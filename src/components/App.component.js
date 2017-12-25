import React, { Component, PropTypes } from 'react';
import Header from './common/header.component';

class App extends React.Component {
  render() {
    return (
      <div className="container">
       <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
