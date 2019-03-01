import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortAmountUp, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import history from './history/history';
import Header from './components/base/Header';
import Tasks from './components/pages/Tasks';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import { fetchTasks } from './actions/tasks';
import './index.css';


library.add(faSortAmountUp, faSortAmountDown);


class AppRouter extends Component {
  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <Router history={history}>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route path="/" exact component={Tasks} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}


AppRouter.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTasks,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppRouter);
