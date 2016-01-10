import React from 'react';
const { Link } = require('react-router');
const { pushPath } = require('redux-simple-router');
const { connect } = require('react-redux');
import BarList from '../../containers/bar-list';
import BarCounts from '../../containers/bar-counts';

const Bar = React.createClass({
  render: function() {
    return (
    	<div className="container">
	        <h1>Bar</h1>
	        <BarList />
          <BarCounts />
	    </div>
    );
  }
});

export default connect(
  null,
  { pushPath }
)(Bar);
