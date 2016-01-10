import React from 'react';
const { Link } = require('react-router');
const { pushPath } = require('redux-simple-router');
const { connect } = require('react-redux');

const MyComponent = React.createClass({
  render: function() {
    return (
    	<div className="container">
    		<h1>Home</h1>
    	</div>
    );
  }
});

module.exports = connect(
  null,
  { pushPath }
)(MyComponent);
