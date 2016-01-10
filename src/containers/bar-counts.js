import {connect} from 'react-redux';
import React, {Component} from 'react';
import {increase, decrease } from '../actions/index';


const BarCount = React.createClass({
  render() {
    return (
    	<div>
          <div  className="row col-sm-4">Number of clicks: {this.props.number}</div>
	     </div>
    );
  }
});

function mapStateToProps (state) {
	return{
		number: state.count.number 
	};
}


export default connect(mapStateToProps)(BarCount);

