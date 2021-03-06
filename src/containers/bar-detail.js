'use strict';
import  React from 'react';
import { connect } from 'react-redux';

const BarDetail = React.createClass({
	render() {
		if (!this.props.post){
			return (
				<div> Select a post </div>
			);
		}
		return (
		<div>
			<h4>Details</h4>

			<div><p>Title: {this.props.post.title}</p></div>
			<div> Text: {this.props.post.text}</div>
			<div> Id: {this.props.post._id}</div>
		</div>
		);
	}
});

function mapStateToProps (state){
	return {
		post: state.activePost
	};
}

export default connect(mapStateToProps)(BarDetail);