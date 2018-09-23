import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './intent/intent.css'
import Demo from './recorder/recorder2.js';
import {Container,Row,Col} from 'react-grid-system';
import { Provider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Intent from './intent/intent.js'
// import Popup from 'react-popup';
// import Dropdown from 'react-dropdown'

// import ReactDOM from 'react-dom';


// import './dropdown.scss';

//drop down
// import Dropdown from './dropDown/dropDown.js';


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      command:'0',
      // namesListSinhala:['වැඩිහිටි සුරැකුම් ක්ෂේත්‍රය','බැංකු ක්ෂේත්‍රය']
    }
    // this.handleChanges=this.handleChanges.bind(this);
  }


  ComponentDidMount(){
    
  }
  handleDomainChanges(e){
    // Popup.alert('I am alert, nice to meet you');
    this.setState({
      domain:e,
      capability:'0'
    })
    
  }

  handleCommandChanges(e){
    console.log(e);
    this.setState({
      command:e
    })
  }

  handleSelectChanges(e){
    console.log(this.state.command);
    this.setState({
      capability:e.target.value,
      // command : null
    })
    console.log(this.state.command+"after");
  }
  refreshing(e){

  }
  render() {
    var options = {
      position: 'top center',
      timeout: 5000,
      offset: '10px',
      transition: 'fade'
    }

    return (
      <Provider template={AlertTemplate} {...options}>
      <div className="App">
      <Container>
      
      <Row>
        <Col sm={4}>
        <Intent
          intent="ගිණුමේ ශේෂය විමසීම" index="1"
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="මුදල් තැම්පත් කිරීමට විමසීම" index="2"
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="මුදල් ලබා ගැනීමට කිරීමට විමසීම" index="3"
        />
        <br/>
        </Col>
         <Col sm={2}>
       </Col>
      </Row>
      <Row>
        <Col sm={4}>
        <Intent
          intent="බිල් ගෙවීම්" index="4"
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="ගිණුම් අතර මුදල් හුවමාරු කිරීම" index="5"
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="ණයපත් ගෙවීම්" index="6"
        />
        <br/>
        </Col>
         <Col sm={2}>
       </Col>
      </Row>
      <Row>
        <Col sm={3}/>
        <Col sm={5}>
        <br/>   
        <Demo 
          domain ={this.state.domain}
          capability ={this.state.capability}
          command = {this.state.command}
        />
        <Col sm={3}/>
        </Col>
      </Row>
     </Container>
      </div>
      </Provider>
       
    )}
}


export default App;
