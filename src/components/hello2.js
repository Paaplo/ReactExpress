import React from 'react';
const { Link } = require('react-router');
const { pushPath } = require('redux-simple-router');
const { connect } = require('react-redux');

const Bar = React.createClass({
  render: function() {
    return (<h1>Bar
     
      </h1>
      );
  }
});

module.exports = connect(
  null,
  { pushPath }
)(Bar);
