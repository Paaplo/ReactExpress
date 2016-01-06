import React from 'react';
const { Link } = require('react-router');
const { pushPath } = require('redux-simple-router');
const { connect } = require('react-redux');

const MyComponent = React.createClass({
  render: function() {
    return (<h1>Foo
     
      </h1>
      );
  }
});

module.exports = connect(
  null,
  { pushPath }
)(MyComponent);
