import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner'

class App extends Component {
  // methods FIRST initialized when you  instanciate classes
  // is called when class is created
  state = {
    lat: null,
    long: null,
    errorMessage: null
  };
  // constructor() {
  //   super();
  //   // only time you use this.state={}
  //   this.state = {
  //     lat: null,
  //     long: null,
  //     errorMessage: null
  //   };


  // }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      },
      error => {
        this.setState({
          errorMessage: error.message
        })
      }
    );
    console.log('componentDidMount');
  }
  componentWillUpdate(nextprops, nextstate, nextcontext) {
    console.log('componentWillUpdate', nextprops, nextstate, nextcontext);
  }
  componentDidUpdate(prevprops, prevstate, snapshot) {
    console.log('componentDidUpdate', prevprops, prevstate, snapshot);
  }

  renderCp(){

  }

  render() {

    
    if (this.state.errorMessage && (!this.state.lat || !this.state.long)) {
      return (<div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
          Error
      </div>
        <p>{this.state.errorMessage}
        </p></div>);

    }

    if (!this.state.errorMessage && (this.state.lat || this.state.long)) {
      return (
        <>


          <p>  <SeasonDisplay lat={this.state.lat} long={this.state.long} /></p>
          <br />


        </>
      )
    }
    return (
      <Spinner message="allow your location"/>
    )

  }
}

ReactDOM.render(
  <App />, document.getElementById('root')

)
