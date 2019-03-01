import React, { Component } from 'react';
import { connect } from 'react-redux';
import {auth, authStatuses} from '../actions/login';
import {bindActionCreators} from "redux";

class LoginForm extends Component {
	state = {
		authErrorsText: {
			emptyContent: 'Необхідно заповнити всі поля',
			invalidData: 'Невірні дані'
		}
	};
	auth(e) {
		e.preventDefault();
		const name = this.loginInput.value,
			password = this.passwordInput.value;

		this.props.auth({name, password});
	}
	showErrors() {
		let status = this.props.login.status;
		if( status === authStatuses.invalidData || status === authStatuses.emptyContent) {
			this.clearInputForm();

			return (
				<div className="col-12 alert alert-danger" role="alert">
					{this.state.authErrorsText[status]}
				</div>
			);
		}
		return null;
	}
	clearInputForm() {
		this.loginInput.value = '';
		this.passwordInput.value = '';
	}
	render() {
		return (
			<form onSubmit={this.auth.bind(this)} className="row col-xs-6 col-lg-4 justify-content-center">
				{this.showErrors()}
				<div className="col-12 form-group">
					<label htmlFor="login">Login</label>
					<input
						type="text"
				        className="form-control"
			            id="login"
				        aria-describedby="loginHelp"
			            placeholder="Enter login"
						maxLength="20"
						required
						ref={ (input) => this.loginInput = input }
					/>
						<small id="loginHelp" className="form-text text-muted">
							Enter valid login
						</small>
				</div>
				<div className="col-12 form-group">
					<label htmlFor="passwordInput">Password</label>
					<input
						type="password"
						className="form-control"
						id="passwordInput"
				        placeholder="Password"
						maxLength="40"
						required
						ref={ (input) => this.passwordInput = input}
					/>
				</div>
				<button type="submit" className="col-6 btn btn-primary">Sign in</button>
			</form>
		)
	}
}

function mapStateToProps(state) {
	return {
		login: state.login
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		auth: (loginData) => auth(loginData)
	}, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
) (LoginForm);