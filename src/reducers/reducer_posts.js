'use strict';
import {ADD_POST, GET_POSTS  } from '../constants';
export default function(state=[], action) {

	switch(action.type){
		case ADD_POST:
			return [ ...state, action.payload.data.SUCCESS ];
		case GET_POSTS:
			return action.payload.data;
	}
  return state;
}




			// return [
			// 			...state.slice(0, state.map((e)=>e._id).indexOf(action.payload.data)),
			// 			...state.slice(state.map((e)=>e._id).indexOf(action.payload.data)+1)
			// 		];
			// https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread
