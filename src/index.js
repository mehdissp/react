import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";

function getBtnTxt() {
  return 'click me in fun';
}
const btntxt = { text: 'click asli' };
const style = { backgroundColor: 'blue', color: 'white' }

const App = () => {
  const BtnTxt = 'Click Me!'

  return (
    <>
      <div class="ui comments container">
        <div class="comment">
          <a href="/" className="avatar">
            <img alet="avatar" src={faker.image.avatar()} />
          </a>
        </div>
        <div ClassName="content">
          <a href="/" className="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
         
          </div>
          <div class="text">
            Hey guys, I hope this example comment is helping you read this documentation.
      </div>
        </div>
      </div>

      {/* <h1>sssssssss</h1>
      <label htmlFor="name" className="label">
        enter name:
    </label>
      <input id="name" type="text" />
      <button type="button" style={style}>{btntxt.text}</button> */}
    </>

  );
};


ReactDOM.render(
  <App />, document.getElementById('root')

)
