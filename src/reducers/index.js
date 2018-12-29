import {combineReducers} from 'redux';

import postsReducer from './posts';
import commentsReducer from './comments';


const allReducers = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});

export default allReducers;