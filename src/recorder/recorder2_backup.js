import React, {Component}          from 'react';
import { render }                  from 'react-dom';
import { FloatingActionButton,
        MuiThemeProvider }         from 'material-ui';
// import injectTapEventPlugin        from 'react-tap-event-plugin';
import MicrophoneOn                from 'material-ui/svg-icons/av/mic';
import MicrophoneOff               from 'material-ui/svg-icons/av/stop';

import { ReactMic } from 'react-mic';
// import sampleAudio                 from './sample_audio.webm';
// import ReactGA                     from 'react-ga';

require ('./styles.scss');

// injectTapEventPlugin();

// ReactGA.initialize('UA-98862819-1');

export default class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false
    }
  }

//   componentDidMount() {
//     ReactGA.pageview(window.location.pathname);
//   }

  startRecording= () => {
    this.setState({
      record: true,
      isRecording: true
    });
  }

  stopRecording= () => {
    this.setState({
      record: false,
      isRecording: false
    });
  }

  onStart=() => {
    console.log('You can tap into the onStart callback');
  }

  onStop= (blobObject) => {
    this.setState({
      blobURL : blobObject.blobURL
    });
  }

  render() {
    const { isRecording } = this.state;

    return(
      <MuiThemeProvider>
        <div>
          <br></br>
          <ReactMic
            className="oscilloscope"
            record={this.state.record}
            backgroundColor="#FF4081"
            visualSetting="sinewave"
            audioBitsPerSecond= {128000}
            onStop={this.onStop}
            onStart={this.onStart}
            strokeColor="#000000" />
          <div>
            <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
          </div>
          <br />
          <br />
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={isRecording}
            onClick={this.startRecording}>
            <MicrophoneOn />
          </FloatingActionButton>
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={!isRecording}
            onClick={this.stopRecording}>
            <MicrophoneOff />
          </FloatingActionButton>
          <br />
          <br />
          <br />
         </div>
    </MuiThemeProvider>
    );
  }
}
// export default Demo;

// render(<Demo/>, document.querySelector('#demo'))