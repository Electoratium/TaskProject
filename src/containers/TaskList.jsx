import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import NewTask from './NewTask';
import EditTaskModal from '../components/EditTaskModal';
import {bindActionCreators} from "redux";
import {fetchTasks, setSort} from "../actions/tasks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TaskList extends Component {
	state = {
		variantsSortIcon: {
			active: 'sort-amount-up',
			default: 'sort-amount-down'
		},
		showEditModal: false,
		editPopupData: {
			id: null,
			status: null,
			text: null
		}
	};
	setSortTasks(e) {
		let sortField = e.currentTarget.getAttribute('data-sort-field');

		this.props.setSort(sortField);
	}
    changeTabTasks(e) {
	    const pageNo = e.currentTarget.getAttribute('data-pageno'),
		    sortField = this.props.tasks.sortField,
		    sortDirection = this.props.tasks.sortByDesk ? 'desc' : 'asc';

	    this.props.fetchTasks(pageNo, sortField, sortDirection);
    }
    editTask(taskId, taskStatus, taskText) {
		const editTaskData = {
			id: taskId,
			status: taskStatus,
			text: taskText
		};
		this.setState({showEditModal: true});
		this.setState({editPopupData: editTaskData});
    }
    editModalClose() {
		this.setState({showEditModal: false});
    }
    showListTasks() {
        if(this.props.tasks.currTaskTab) {
            return this.props.tasks.currTaskTab.map( (task) => {
	            return (
	            	    <tr key={task.id}>
			                <td className="text-center">
				                <input type="checkbox" checked={task.status === 10} disabled/>
			                </td>
			                <td className="text-center">
				                {task.username}
			                </td>
			                <td className="text-center">
				                {task.email}
			                </td>
			                <td className="text-center">
				                {task.text}
			                </td>
			                <td className={ !this.props.login.isLogged ? 'd-none' : ''}>
				                <button
					                className="col-12 btn btn-success"
					                onClick={ () => this.editTask(task.id, task.status, task.text)}
				                >
					                Edit
				                </button>
			                </td>
		                </tr>
                );
            });
        }
        return (
        	<tr>
		        <td>You haven't any tasks!</td>
            </tr>
        );
    }
    showPagination() {
        let nmbTabs = this.props.tasks.totalTasks / 3;

        nmbTabs = nmbTabs ?
            nmbTabs % 1 === 0 ?
                nmbTabs :
                nmbTabs + 1
            : 1;

        let arrayTab = [];

        for(let index = 1; index <= nmbTabs; index++) {
            arrayTab.push (
                <li className={`page-item ${index === this.props.tasks.page ? 'active': ''}`} key={index} data-pageno={index} onClick={this.changeTabTasks.bind(this)}>
                    <span className="page-link">{index}</span>
                </li>
            );
        }
        return arrayTab
    }
    render() {
		const {showEditModal, editPopupData, variantsSortIcon} = this.state;
		const {sortField} = this.props.tasks;

        return (
        	<Fragment>
	            <EditTaskModal taskData={editPopupData} isOpen={showEditModal} onClose={this.editModalClose.bind(this)} />
	            <div>
		            <table className="table">
			            <thead className="thead-light">
			            <tr>
				            <th
					            className="text-center"
					            onClick={this.setSortTasks.bind(this)}
					            data-sort-field="status"
				            >
					            Status
					            <FontAwesomeIcon
					                icon={ sortField === 'status' && !this.props.tasks.sortByDesk ? variantsSortIcon.active : variantsSortIcon.default }
					            />
				            </th>
				            <th
					            className="text-center"
					            onClick={this.setSortTasks.bind(this)}
					            data-sort-field="username"
				            >
					            User Name
					            <FontAwesomeIcon
						            icon={sortField === 'username' && !this.props.tasks.sortByDesk ? variantsSortIcon.active : variantsSortIcon.default}
					            />
				            </th>
				            <th
					            className="text-center"
					            onClick={this.setSortTasks.bind(this)}
					            data-sort-field="email"
				            >
					            Email
					            <FontAwesomeIcon
						            icon={sortField === 'email' && !this.props.tasks.sortByDesk ? variantsSortIcon.active : variantsSortIcon.default}
					            />
				            </th>
				            <th className="text-center">Text</th>
				            <th
					            className={`text-center ${!this.props.login.isLogged ? 'd-none' : ''}` }
				            >
					            Edit
				            </th>
			            </tr>
			            </thead>
			            <tbody>
			                {this.showListTasks()}
			            </tbody>
		            </table>

	                <nav aria-label="Page navigation example">
	                    <ul className="pagination justify-content-center">
	                        {this.showPagination()}
	                    </ul>
	                </nav>
	                <NewTask />
	            </div>
	        </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
    	login: state.login,
        tasks: state.tasks
    };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchTasks: (pageNo, sortField, sortDirection) => fetchTasks(pageNo, sortField, sortDirection),
		setSort: (sortField) => setSort(sortField)
	}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TaskList);
