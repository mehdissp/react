import React from 'react';
import ReactDOM from 'react-dom';

const ApprovalCard =(props)=>{
    console.log(props)
return (
<div className="ui card">
    <div className="content">
        
    {props.children
    } 
    </div>
    <div className="extra content">
                
    <div className="ui two buttons">
    <div className="ui basic green button">ApprovalCard</div>
    <div className="ui basic red button">ApprovalCard</div>
    </div>
    </div>

</div>

)


};
export default ApprovalCard;