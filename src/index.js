import React from 'react';
import ReactDOM from 'react-dom';

function getBtnTxt() {
  return 'click me in fun';
}

const App = () => {
  const BtnTxt = 'Click Me!'

  return (
    <div>
      hellossssssssssss
      <label for="name" className="label">
        enter name:
    </label>
      <input id="name" type="text" />
      <button type="button" style={{
        backgroundColor: 'skyblue'
        , color: 'white'
      }}>{getBtnTxt()}</button>
    </div>

  );
};


ReactDOM.render(
  <App />, document.getElementById('root')

)
