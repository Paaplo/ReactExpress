'use strict';
import { connect } from 'react-redux';
import React from 'react';
import { selectPost, increase, decrease, getPosts } from '../actions/index';
import { bindActionCreators } from 'redux';
import BarDetail from './bar-detail';
import barStyles from './bar-list.css';

const BarList = React.createClass({
  componentDidMount() {
    //ei haeta uutta tilaa
    if(this.props.posts.length === 0)
      this.props.getPosts();
  },
  renderList(){
  	return this.props.posts.map((post) =>{
  		return (
  			<li 
    			key={post._id} 
    			onClick ={() => {
    				this.props.selectPost(post);
    				this.props.increase(1);
    			}}
          className={'list-group-item '+ barStyles.barList}
        >
          {post.title}
          <i 
            className="glyphicon glyphicon-remove pull-right"

          ></i>
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
	};
}

function mapDispatchToProps (dispacth) {
	//Whenever selectPost is called the result should be 
	//passed to all of our reducers
	return bindActionCreators({selectPost, increase, decrease, getPosts }, dispacth);
}

export default connect(mapStateToProps, mapDispatchToProps)(BarList);

