import React from 'react';
const { Link } = require('react-router');
const { pushPath } = require('redux-simple-router');
const { connect } = require('react-redux');

import AddPostForm from '../../containers/foo-addPostForm';

const Foo = React.createClass({
  render: function() {
    return (
    	<div className="container">
    		<h1>Add to database </h1>
				<AddPostForm/>
    	</div>
    );
  }
});

export default connect(
  null,
  { pushPath }
)(Foo);