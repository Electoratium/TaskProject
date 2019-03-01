import Axios from 'axios';
import * as md5 from 'js-md5';

const baseUrl = 'https://uxcandy.com/~shapoval/test-task-backend';


const defaultParams = { developer: 'Vadim' };

export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_SORT = 'SET_SORT';


export const fetchTasks = (pageNo = 1, sortField = null, sortDirection = null) => {
  let params = {
    ...defaultParams,
    page: pageNo,
  };

  params = sortField ? {
    ...params,
    sort_field: sortField,
    sort_direction: sortDirection,
  } : params;

  return dispatch => Axios.get(`${baseUrl}/`, { params })
    .then((response) => {
      dispatch({
        type: FETCH_TASKS,
        payload: {
          currTasks: response.data.message.tasks,
          total: response.data.message.total_task_count,
          page: pageNo,
        },
      });
    });
};

export const addTask = (newTaskData) => {
  const formData = new FormData();
  formData.append('username', newTaskData.username);
  formData.append('email', newTaskData.email);
  formData.append('text', newTaskData.text);

  return dispatch => Axios.post(`${baseUrl}/create`, formData, { headers: { 'Content-Type': 'multipart/form-data' }, params: defaultParams })
    .then((response) => {
      dispatch({
        type: ADD_TASK,
        payload: {
          ...response.data.message,
        },
      });
    });
};

export const editTask = taskData => (dispatch) => {
  const token = 'beejee';

  const encodedStatus = encodeURIComponent(taskData.status);


  const encodedText = encodeURIComponent(taskData.text);


  const encodedToken = encodeURIComponent(token);

  const paramString = `status=${encodedStatus}&text=${encodedText}&token=${encodedToken}`;


  const signature = md5(paramString);

  const formData = new FormData();
  formData.append('status', taskData.status);
  formData.append('text', taskData.text);
  formData.append('signature', signature);
  formData.append('token', token);


  return Axios.post(`${baseUrl}/edit/${taskData.id}`,
    formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      params: {
        ...defaultParams,
      },
    })
    .then(() => {
      dispatch({
        type: EDIT_TASK,
        payload: { ...taskData },
      });
    });
};


export const setSort = sortField => ({
  type: SET_SORT,
  payload: sortField,
});
