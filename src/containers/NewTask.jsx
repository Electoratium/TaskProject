import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/tasks';

class NewTask extends Component {
  showForm() {
    document.getElementById('taskForm').classList.toggle('d-none');
  }

  createTask(e) {
    e.preventDefault();

    const dataNewTask = {
      username: this.userName.value,
      email: this.email.value,
      text: this.text.value,
    };
    this.props.addTask(dataNewTask);

    this.clearInputForm();
  }

  clearInputForm() {
    this.userName.value = '';
    this.email.value = '';
    this.text.value = '';
    document.getElementById('taskForm').classList.add('hidden');
  }

  render() {
    return (
      <Fragment>
        <button type="button" className="btn btn-outline-success" onClick={this.showForm}>Add new task</button>

        <form onSubmit={e => this.createTask(e)} id="taskForm" className="d-none mt-4">
          <div className="form-group">
            <label htmlFor="taskUserName">User name: *</label>
            <input
              type="text"
              className="form-control"
              id="taskUserName"
              maxLength="48"
              required
              ref={input => this.userName = input}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskEmail">Email: *</label>
            <input
              type="email"
              className="form-control"
              id="taskEmail"
              maxLength="48"
              required
              ref={input => this.email = input}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskBody">Task: *</label>
            <textarea
              className="form-control"
              id="taskBody"
              rows="2"
              maxLength="240"
              required
              ref={input => this.text = input}
            />
          </div>
          <button type="submit" className="btn btn-outline-info">Create task</button>
        </form>
      </Fragment>
    );
  }
}


NewTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTask: dataNewTask => addTask(dataNewTask),
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewTask);
