import React, { Component, PropTypes } from 'react';
import Header from './common/header.component';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container">
       <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
