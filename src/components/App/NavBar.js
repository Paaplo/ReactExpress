import React from 'react';
import { Router, Route, Link } from 'react-router';

let NavBar = React.createClass({  
  render() {
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand"></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="bar">Bar</Link></li>
              <li><Link to="foo">Foo</Link></li>             
          //    <li><Link to="login">Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

export default NavBar;  
