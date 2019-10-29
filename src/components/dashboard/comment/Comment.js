import React from 'react'
import './comment.css'
const Comment = () => {
    return (
        <div className="comment">
            <div className="profile">
                <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="user profile" />
            </div>
            <div className="comment-container">
                <p>Selu Hadu</p>
                <div className="comment-body">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comment
