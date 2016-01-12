'use strict';
import axios from 'axios';
import {POST_SELECTED, INCREASE, DECREASE, ADD_POST, GET_POSTS,DELETE_POST } from '../constants';
function selectPost (post) {
	return {
		type: POST_SELECTED,
		payload: post
	};
}

function increase(n) {
  return {
    type: INCREASE,
    amount: n
  };
}

function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  };
}

function addPost (data) {
  const request = axios.post('/api/posts',data);
  return {
    type: ADD_POST,
    payload: request
  };
}
function getPosts () {
  const request = axios.get('/api/posts');
  return {
    type: GET_POSTS,
    payload: request
  };
}
function deletePost (id) {
  console.log(id);
  const request = axios.delete('/api/posts/'+id);
  return {
    type: DELETE_POST,
    payload: request
  };
}

export {increase, decrease, selectPost, addPost, getPosts, deletePost };

