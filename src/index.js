import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from "./commentDetail";
import { Comment } from "./commentDetail";
import ApprovalCard from "./approvalCard";


// function getBtnTxt() {
//   return 'click me in fun';
// }
// const btntxt = { text: 'click asli' };
const style = { backgroundColor: 'blue', color: 'white' }

const App = () => {
  const BtnTxt = 'Click Me!'

  return (
    <>
      <div className="ui comments container" style={{marginTop:"30px"}}>
        <ApprovalCard>
    
        <CommentDetail author="ali"
          date="1 day"
          comment="salam khare" />
          </ApprovalCard>
          <ApprovalCard>
        <CommentDetail
          author="zirfali"
          date="2 day"
          comment="salam khare1" />
           </ApprovalCard>
           <ApprovalCard>
        <CommentDetail
          author="shandli"
          date="3 day"
          comment="salam khare2" />
    </ApprovalCard>
      </div>



    </>

  );
};


ReactDOM.render(
  <App />, document.getElementById('root')

)
