import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logout, authStatuses } from '../actions/login';

class LoginBar extends Component {
  onLogout(e) {
    e.preventDefault();

    this.props.logout();
  }

  render() {
    const { login } = this.props;

    if (login.status === authStatuses.success) {
      return (
        <div>
          <span className="text-white">
            {login.name}
            {' '}
|
          </span>
          <Link to="/logout" onClick={this.onLogout.bind(this)}>Logout</Link>
        </div>
      );
    }
    return (
      <Link to="/login">Login</Link>
    );
  }
}

LoginBar.propTypes = {
  login: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout,
  }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginBar);
