import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
const { connect } = require('react-redux');
import {addPost} from '../actions/index';
import {bindActionCreators} from 'redux';

class AddPostForm extends Component {
	constructor(props){
		super(props);
	}

	onSubmit(event){
		event.preventDefault();
	  var formData = {
	    title:findDOMNode(this.refs.title).value,
	    text: findDOMNode(this.refs.text).value,
	  };
	  this.props.addPost(formData);
	  findDOMNode(this.refs.title).value = "";
	  findDOMNode(this.refs.text).value = "";
	}

	sendFormData () {
	  // Fetch form values.

	}
  render() {
    return (
		<form onSubmit={this.onSubmit.bind(this)} className="form-horizontal" role="form">
		  <div className="form-group">
		    <label className="control-label col-sm-2" >Title:</label>
		    <div className="col-sm-10">
		      <input  className="form-control" id="title" placeholder="Title" ref="title"/>
		    </div>
		  </div>
		  <div className="form-group">
		    <label className="control-label col-sm-2" >Content:</label>
		    <div className="col-sm-10"> 
		      <textarea  className="form-control" id="text" ref="text"/>
		    </div>
		  </div>
		  <div className="form-group"> 
		    <div className="col-sm-offset-2 col-sm-10">
		      <button type="submit" className="btn btn-default" >Submit</button>
		    </div>
		  </div>
		</form>
    );
  }
}
function mapDispatchToProps (dispatch) {
	return bindActionCreators({addPost}, dispatch);
}
export default connect(null, mapDispatchToProps)(AddPostForm);