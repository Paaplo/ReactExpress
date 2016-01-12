import React, {Component} from 'react';
import { Link } from 'react-router';
import { pushPath } from 'redux-simple-router';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/index';
import { bindActionCreators } from 'redux';

class Home extends Component{
	constructor(props) {
	    super(props);
	}

  render() {
    return (
    	<div className="container">
    		<h1>Home</h1>
    	</div>
    );
  }
};

export default connect(
  null,
   { pushPath } 
)(Home);
