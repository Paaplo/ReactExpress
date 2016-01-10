
import React, {Component} from 'react';
const { Link } = require('react-router');

import NavBar from './App/NavBar';
import Footer from './App/Footer';
import mainStyles from './styles/main.css';

class App extends Component {
 render() {
    return(
      <div>
        < NavBar/>
          {this.props.children}
        < Footer />
      </div>
    )
  }
}

export default App;