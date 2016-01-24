'use strict';
import axios from 'axios';
import {POST_SELECTED, INCREASE, DECREASE, ADD_POST, GET_POSTS } from '../constants';

export function selectPost (post) {
	return {
		type: POST_SELECTED,
		payload: post
	};
}

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  };
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  };
}

export function addPost (data) {
  const request = axios.post('/api/posts',data);
  return {
    type: ADD_POST,
    payload: request
  };
}

export function getPosts () {
  const request = axios.get('/api/posts');
  return {
    type: GET_POSTS,
    payload: request
  };
}




