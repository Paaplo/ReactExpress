
import React, {Component} from 'react';
const { Link } = require('react-router');

import NavBar from './NavBar';
import Footer from './Footer';


class App extends Component {
 render() {
   const { header, content, footer } = this.props;
   const defaultContent = (
	  <div className="page centered-text">
	    <h1>
	    	App
	    </h1>
	  </div>
	);
    return(
      <div>
        < NavBar/>
          {content || defaultContent}
        < Footer />
      </div>
    )
  }
}

export default App;