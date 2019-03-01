import { combineReducers } from 'redux';

import loginReducer from './login';
import tasksReducer from './tasks';


const allReducers = combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
});

export default allReducers;
