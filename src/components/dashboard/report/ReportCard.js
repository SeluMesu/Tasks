import React from 'react'
import CommentCard from '../comment/CommentCard'
import PropTypes from 'prop-types'
import './report.css'
const ReportCard = ({ report }) => {
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
                {comments.map((comment, index) => <CommentCard key={index} comment={comment} />)}
            </div>
            <div className="add-comment">
                <textarea type="plain/text" placeholder="Add Comment ..." />
            </div>
        </div>
    )
}


ReportCard.propTypes = {
    report: PropTypes.shape({
        desc: PropTypes.string,
        title: PropTypes.string,
        project: PropTypes.string,
        dueDate: PropTypes.string,
        priority: PropTypes.string,
        comments: PropTypes.array
    })
}
export default ReportCard
