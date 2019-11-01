import React from 'react'
import './comment.css'
import PropTypes from 'prop-types'
const CommentCard = ({ comment }) => {
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

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        name: PropTypes.string,
        profileImg: PropTypes.string,
    })
}
export default CommentCard
