import React, { Component } from 'react';
import './App.css';
import './intent/intent.css'
import './display/display.css'
import Demo from './recorder/recorder2.js';
import {Container,Row,Col} from 'react-grid-system';
import { Provider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Intent from './intent/intent.js'
import Selector from './selector/selectors';
import Display from './display/display';
class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      type:'0',
      intent: null,
      message:null,
      status:null,
    }
  }


  ComponentDidMount(){
    
  }
  handleTypeChanges(e){
    // Popup.alert('I am alert, nice to meet you');
    this.setState({
      type:e
    })
    this.toInit();
  }
  handleIntent(e){
    console.log("I handle intents");
    let intentRecived = e.split(",")[0];
    let messageRecived = e.split(",")[1];
    if (this.state.type == "nn"){

      let show = "  Intent Classifyied with a probability of: " + messageRecived
      let show1 = "  Classification Failed"
      if (intentRecived == "-1"){
        this.setState({
          intent:intentRecived,
          message:show1,
          status: "  Classification Failed"
        })
      }else{
      this.setState({
        intent:intentRecived,
        message:show,
        status:"  Classification Successful"
      })
    }
    }else if(this.state.type == "text"){
      let show = "  Converted Text: " + messageRecived 
      let show1 = "  Converted Text: " + messageRecived
      if (intentRecived == "-1"){
        this.setState({
          intent:intentRecived,
          message:show1,
          status:"  Direct Matching Failed"
        })
      }else{
      this.setState({
        intent:intentRecived,
        message:show,
        status:"  Direct Matching Successful"
      })
    }
    console.log(intentRecived);
  }
    
  }
  
  toInit(){
    this.setState({
      intent: null,
      message:null,
      status:null
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
        <Col sm={12}>
      <Selector 
          handleTypeChanges={this.handleTypeChanges.bind(this)}
       />
       </Col>
       </Row>
       <Row>
       <Col sm={6}>
       <br/>
       <br/>
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
       </Col>
       <Col sm={6}>
       <Row>
        <Col sm={1}/>
        <Col sm={10}>
        <br/> 
        <br/>
        <br/>
        <br/>  
        <Demo 
          handledIntent={this.handleIntent.bind(this)}
          toInit ={this.toInit.bind(this)}
          type = {this.state.type}
        />
        </Col>
        <Col sm={1}/>
        
      </Row>
       </Col>
       </Row>
      <Row>
        <Display
        message = {this.state.message}
        status = {this.state.status}
        type = {this.state.type}
        />
      </Row>
      
     </Container>
      </div>
      </Provider>
       
    )}
}


export default App;
