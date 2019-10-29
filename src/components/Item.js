import React from 'react'
import Comment from './dashboard/comment/Comment'
// import Masonry from 'masonry-layout'
import './item.css'
const Item = ({ comment }) => {


    return (
        <div className="item-container">
            <div className="project-title">
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <p>
                    Integret PayPal and Stripe Checkout
                </p>
            </div>
            <div className="project">
                <span></span>
                <p>Project: </p>
                <p className="title">Payments</p>
            </div>
            <div className="flex priority">
                <div className="left">
                    <span></span>
                    <p>Priority: </p>
                    <p className="title">High</p>
                </div>
                <div className="right">
                    <p>Due: </p>
                    <p className="title"> Today</p>
                </div>
            </div>
            <div className="description">
                <p>{comment}</p>
            </div>
            <div className="list-comments">
                {/* <p>No Comment</p> */}
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
            <div className="add-comment">
                <textarea type="plain/text" placeholder="Add Comment ..." />
            </div>
        </div>
    )
}

export default Item
