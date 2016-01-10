'use strict';
import count from './reducer_count';
import posts from './reducer_posts';
import activePost from './reducer_active_post';
import { routeReducer as routing } from 'redux-simple-router';
import { combineReducers } from 'redux';


export default combineReducers({
  count, 
  posts, 
  activePost, 
  routing
});