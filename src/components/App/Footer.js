import React from 'react';
import footerStyles from '../styles/footer.css';

export default React.createClass({
	render: function() {
		return (
      <footer className="footer navbar-fixed-bottom" >
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3>Footer</h3>
            </div>
          </div>
        </div>
      </footer>		
      );
	}
});

