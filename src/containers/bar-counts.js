'use strict';
import {connect} from 'react-redux';
import React, {Component} from 'react';

const BarCount = React.createClass({
  render() {
    return (
    	<div>
          <div className="col-sm-4">
            Number of clicks: {this.props.number}
          </div>
	     </div>
    );
  }
});

function mapStateToProps (state) {
	return{
		number: state.counts.number 
	};
}


export default connect(mapStateToProps)(BarCount);

