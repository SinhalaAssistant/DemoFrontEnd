import React, { Component } from 'react';
import './App.css';
import './intent/intent.css'
import Demo from './recorder/recorder2.js';
import {Container,Row,Col} from 'react-grid-system';
import { Provider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Intent from './intent/intent.js'


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      intent: null
    }
  }


  ComponentDidMount(){
    
  }

  handleIntent(e){
    console.log("I handle intents");
    this.setState({
      intent:e,
    })
    
  }
  
  toInit(){
    this.setState({
      intent: null
    })
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
          intent="ගිණුමේ ශේෂය විමසීම" 
          index="1"
          selectedIntent = {this.state.intent}
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="මුදල් තැම්පත් කිරීමට විමසීම"
          index="2"
          selectedIntent = {this.state.intent}
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="මුදල් ගැනීමට විමසීම"
          index="3"
          selectedIntent = {this.state.intent}
        />
        <br/>
        </Col>
         <Col sm={2}>
       </Col>
      </Row>
      <Row>
        <Col sm={4}>
        <Intent
          intent="බිල් ගෙවීම්"
          index="4"
          selectedIntent = {this.state.intent}
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="ගිණුම් අතර මුදල් හුවමාරු කිරීම" 
          index="5"
          selectedIntent = {this.state.intent}
        />
        <br/>
        </Col>
        <Col sm={4}>
        <Intent
          intent="ණයපත් ගෙවීම්" 
          index="6"
          selectedIntent = {this.state.intent}
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
          handledIntent={this.handleIntent.bind(this)}
          toInit ={this.toInit.bind(this)}
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
