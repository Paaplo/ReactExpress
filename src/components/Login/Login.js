import React, {Component} from 'react';
import { Link } from 'react-router';
import { pushPath } from 'redux-simple-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import Login from '../../containers/login';
class Login extends Component{
	constructor(props) {
	    super(props);
	}

  render() {
    return (
    	<div className="container">
    		<h1>Login</h1>
          //  <Login />
    	</div>
    );
  }
};

export default connect(
  null,
   { pushPath } 
)(Login);
