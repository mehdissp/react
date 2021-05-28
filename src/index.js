import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from "./commentDetail";
import {Comment} from "./commentDetail";


// function getBtnTxt() {
//   return 'click me in fun';
// }
// const btntxt = { text: 'click asli' };
const style = { backgroundColor: 'blue', color: 'white' }

const App = () => {
  const BtnTxt = 'Click Me!'

  return (
    <>
      <div className="ui comments container">
      <Comment/>
      <CommentDetail author="ali" date="1 day" comment="salam khare"/>
      <CommentDetail author="zirfali" date="2 day" comment="salam khare1"/>
      <CommentDetail author="shandli" date="3 day" comment="salam khare2"/>
   
      </div>



    </>

  );
};


ReactDOM.render(
  <App />, document.getElementById('root')

)
