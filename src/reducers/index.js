import {combineReducers} from 'redux';

import postsReducer from './posts';
const allReducers = combineReducers({
    posts: postsReducer
});

export default allReducers;