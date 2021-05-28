import React from 'react';
import ReactDOM from 'react-dom';

function getBtnTxt() {
  return 'click me in fun';
}
const btntxt={text:'click asli'};
const style={backgroundColor:'blue',color:'white'}

const App = () => {
  const BtnTxt = 'Click Me!'

  return (
    <div>
      hellossssssssssss
      <label for="name" className="label">
        enter name:
    </label>
      <input id="name" type="text" />
      <button type="button" style={style}>{btntxt.text}</button>
    </div>

  );
};


ReactDOM.render(
  <App />, document.getElementById('root')

)
