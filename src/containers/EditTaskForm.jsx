import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTask } from '../actions/tasks';

class EditTaskForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const { id } = this.props.taskData;


    const status = this.status.checked ? 10 : 0;


    const text = this.text.value;

    const taskData = {
      id,
      status,
      text,
    };

    this.props.editTask(taskData);
    this.props.onClose();
  }

  render() {
    const { taskData, status, onClose } = this.props;
    return (
      <div className="modal-form">
        <form className="row col-12 justify-content-center" onSubmit={this.onSubmit.bind(this)}>
          <h2>Edit task</h2>
          <div className="row col-12 justify-content-end">
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              id="checkbox"
              className="form-check-input"
              ref={checkbox => this.status = checkbox}
              defaultChecked={taskData.status === 10}
            />
            <label className="form-check-label" htmlFor="checkbox"><b>Is complete?</b></label>
          </div>
          <h1>{status}</h1>
          <div className="col-12 form-group">
            <label htmlFor="text">Task text</label>
            <textarea
              className="form-control"
              id="text"
              placeholder="Text"
              maxLength="100"
              required
              ref={input => this.text = input}
              defaultValue={taskData.text}
            />
          </div>
          <button type="submit" className="col-6 btn btn-primary">Edit</button>
        </form>
      </div>
    );
  }
}


EditTaskForm.propTypes = {
  status: PropTypes.number,
  taskData: PropTypes.object.isRequired,
  editTask: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editTask: taskData => editTask(taskData),
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps,
)(EditTaskForm);
