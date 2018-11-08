import React, { Component } from 'react';

// import Radio from './radioButton/radioButton.js';

// require ('./selectors.css');


class Display extends Component {

    render() {

      return (
        
        <div className="displayClass" >
            <h4>
            {/* {this.props.message} */}
            {this.props.message} 
            <br/>
            <span className='status'>
            {this.props.status}
            </span>
            </h4>
        </div>
        
      );
    }
  }

  export default Display;