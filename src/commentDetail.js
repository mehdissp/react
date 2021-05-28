import React from 'react';

import faker from "faker";
const CommentDetail = (props) => {
    console.log(props)
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alet="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
    <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <div className="date">{props.date}</div>

                </div>
                <div className="text">
                {props.comment}
                </div>
            </div>
        </div>

    )
};

export const Comment =()=>{
    return (
        <h1>helloeeeee</h1>
    );
};
export default CommentDetail;