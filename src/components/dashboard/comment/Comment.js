import React from 'react'
import './comment.css'
const Comment = ({ comment }) => {
    const { text, name, profileImg } = comment;
    return (
        <div className="comment">
            <div className="profile">
                <img src={profileImg} alt="user profile" />
            </div>
            <div className="comment-container">
                <p>{name}</p>
                <div className="comment-body">
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comment
