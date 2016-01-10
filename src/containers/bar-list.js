'use strict';
import {connect} from 'react-redux';
import React from 'react';
import {selectPost,increase, decrease } from '../actions/index';
import {bindActionCreators} from 'redux';
import BarDetail from './bar-detail';
import barStyles from './bar-list.css';

const BarList = React.createClass({
  renderList(){
  	return this.props.posts.map((post) =>{
  		return (
  			<li 
  			key={post.title} 
  			onClick ={() => {
  				this.props.selectPost(post);
  				this.props.increase(1);
  			}}
        className={'list-group-item '+ barStyles.barList}>
  				{post.title}
  			</li>
  		);
  	});
  },
  render() {
    return (
    	<div className="row">
	        <ul className="list-group col-sm-4">
	           {this.renderList()}
	        </ul>
          <BarDetail />
	     </div>
    );
  }
});

function mapStateToProps (state) {
	return{
		posts: state.posts,
		number: state.count.number 
	};
}

function mapDispatchToProps (dispacth) {
	//Whenever selectPost is called the result should be 
	//passed to all of our reducers
	return bindActionCreators({selectPost, increase, decrease}, dispacth);
}

export default connect(mapStateToProps, mapDispatchToProps)(BarList);

