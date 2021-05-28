import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';


class App extends Component {
  // methods FIRST initialized when you  instanciate classes
  // is called when class is created
  constructor() {
    super();
    // only time you use this.state={}
    this.state={
      lat :null,
      long:null
    };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat :position.coords.latitude,
          long :position.coords.longitude
        })
      },
      error => {console.log(error)}
    );

  }

  render() {
 
    return (
      <>
        <p>lat :{this.state.lat}</p>
        <p>lan :{this.state.long}</p>
        <p>  <SeasonDisplay /></p>
        <br />


      </>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')

)
