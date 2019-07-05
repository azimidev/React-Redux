import { combineReducers } from 'redux';
import postsReducers from './postsReducers';

export default combineReducers({
    posts: postsReducers
});
