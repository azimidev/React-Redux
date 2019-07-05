import { combineReducers } from 'redux';
import postsReducers from './postsReducers';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postsReducers,
    users: usersReducer,
});
