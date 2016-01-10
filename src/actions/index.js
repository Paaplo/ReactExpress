'use strict';
import {POST_SELECTED, INCREASE, DECREASE} from '../constants';
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

export {increase, decrease, selectPost};