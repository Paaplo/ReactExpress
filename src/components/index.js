
import React, {Component} from 'react';
const { Link } = require('react-router');

import NavBar from './App/NavBar';
import Footer from './App/Footer';
import mainStyles from './styles/main.css';

class App extends Component {
 render() {
    return(
      <div className={mainStyles.wrapper}>
	        < NavBar/>
	          <div className={mainStyles.body} >
	          	{this.props.children}
	          </div> 
        < Footer />
      </div>
    )
  }
}

export default App;