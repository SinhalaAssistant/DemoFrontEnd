import React, {Component}          from 'react';
import { render }                  from 'react-dom';
// import 'intent.css';   

class Intent extends Component {
    constructor(props){
      super(props);
      this.state = {
        intent:null,
        index: 0,
        intentNo:null,
        nColour:'ff0000',
        yColour:'008000'
      };
    }
    componentWillReceiveProps(){ //this is called to before render method
        this.setState({
           intent:this.props.intent,
           index:this.props.index
     })
    }
    render() {
      if(this.props.selectedIntent == this.state.index){
        return (
            <div class="intentClass2">
              {this.props.intent}
            </div>
         );
        }else{
          return (
          <div class="intentClass">
            {this.props.intent}
          </div>
          );
        }
    }
}
export default Intent;
