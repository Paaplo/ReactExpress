'use strict';
import {POST_SELECTED} from '../constants';

export default function (state = null, action) {
	switch (action.type){
		case POST_SELECTED:
		return action.payload;
	}
	return state;
}