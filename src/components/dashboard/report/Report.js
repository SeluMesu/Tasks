import React from 'react'
import Comment from '../comment/Comment'
// import Masonry from 'masonry-layout'
import './report.css'
const Report = ({ report }) => {
    const { desc, title, project, dueDate, priority, comments } = report;
    return (
        <div className="item-container">
            <div className="project-title">
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <p>
                    {title}
                </p>
            </div>
            <div className="project">
                <span></span>
                <p>Project: </p>
                <p className="title">{project}</p>
            </div>
            <div className="flex priority">
                <div className="left">
                    <span></span>
                    <p>Priority: </p>
                    <p className="title">{priority}</p>
                </div>
                <div className="right">
                    <p>Due: </p>
                    <p className="title"> {dueDate}</p>
                </div>
            </div>
            <div className="description">
                <p>{desc}</p>
            </div>
            <div className="list-comments">
                {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
            </div>
            <div className="add-comment">
                <textarea type="plain/text" placeholder="Add Comment ..." />
            </div>
        </div>
    )
}

export default Report
