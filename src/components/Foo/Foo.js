import React from 'react';
const { Link } = require('react-router');
const { pushPath } = require('redux-simple-router');
const { connect } = require('react-redux');

const Foo = React.createClass({
  render: function() {
    return (
    	<div className="container">
    		<h1>Foo</h1>
    	</div>
    );
  }
});

export default connect(
  null,
  { pushPath }
)(Foo);