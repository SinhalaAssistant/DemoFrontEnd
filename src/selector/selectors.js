import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';

// import Radio from './radioButton/radioButton.js';

// require ('./selectors.css');


class Selector extends Component {

    render() {
      var names = ['nn', 'text'];
      var namesSinhala=['Neural Network','Speech to Text']
      var radioButtons=[];
      // var namesListSinhala = namesSinhala.map(function(name,index){});
      var namesList = namesSinhala.map(function(name,index){
      radioButtons.push(
      <ReversedRadioButton
      value={names[index]} key={index}
      pointColor={'#1E90FF'} 
      rootColor={'black'}
      padding={15}
      
      >
      {name}
      </ReversedRadioButton>);
      // {['වැඩිහිටි සුරැකුම් ක්ෂේත්‍රය','බැංකු ක්ෂේත්‍රය'][{index}]}
      });

      return (
        <div className="selector" >

        <h3 className="header" >Select a model for Intent Classification</h3>
        <b className="radio">
        <RadioGroup 
          onChange={ this.props.handleTypeChanges} 
          horizontal
        >
        {radioButtons}
        </RadioGroup>
        </b>
        </div>
      );
    }
  }

  export default Selector;