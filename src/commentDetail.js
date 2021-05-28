import React from 'react';

import faker from "faker";
const CommentDetail = () => {
    return (
        <div class="comment">
            <a href="/" className="avatar">
                <img alet="avatar" src={faker.image.avatar()} />
            </a>
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

    )
};

export const Comment =()=>{
    return (
        <h1>helloeeeee</h1>
    );
};
export default CommentDetail;