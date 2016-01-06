import React from 'react';
const { Link } = require('react-router');
const { pushPath } = require('redux-simple-router');
const { connect } = require('react-redux');

const MyComponent = React.createClass({
  render: function() {
    return (<div>Hello World
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => pushPath('/foo')}>Go to /foo</button>
      </div>
      </div>
      );
  }
});

module.exports = connect(
  null,
  { pushPath }
)(MyComponent);
