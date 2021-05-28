import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from "./commentDetail";
import {Comment} from "./commentDetail";


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
      <Comment/>
      <CommentDetail/>
      <CommentDetail/>
      <CommentDetail/>
      <CommentDetail/>
   
      </div>



    </>

  );
};


ReactDOM.render(
  <App />, document.getElementById('root')

)
