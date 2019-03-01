import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import EditTaskForm from '../containers/EditTaskForm';


class EditTaskModal extends Component {
  closeModal(e) {
    const currElement = e.target;

    if (currElement.classList.contains('modal-container')) {
      this.props.onClose();
    }
  }

  render() {
    const { isOpen, onClose, taskData } = this.props;

    return isOpen
      ? ReactDOM.createPortal(
        <div className="modal-container" onClick={this.closeModal.bind(this)} role="presentation">
          <EditTaskForm onClose={onClose} taskData={taskData} />
        </div>,
        document.body,
	        )
      : null;
  }
}

EditTaskModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  taskData: PropTypes.object.isRequired,
};

export default EditTaskModal;
