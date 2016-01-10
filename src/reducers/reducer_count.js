'use strict';
const {INCREASE, DECREASE} = require('../constants');

const initialState = {
  number: 0
};

function update(state = initialState, action) {
	switch (action.type){
		case INCREASE:
		  return { number: state.number + action.amount };
		case DECREASE:    
			return { number: state.number - action.amount };
	}
  return state;
}

export default update;