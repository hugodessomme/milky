import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from './containers/Auth/Auth';
import TasksManager from './containers/TasksManager/TasksManager';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        {this.props.isAuthenticated ? <TasksManager /> : <Auth />}
      </Layout>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
