
import React from 'react';
const { Link } = require('react-router');

import NavBar from './NavBar';
import Main from './Main';

let App = React.createClass({  
  render() {
    return(
      <div>
        < NavBar/>
        < Main />
      </div>
    )
  }
});

export default App;