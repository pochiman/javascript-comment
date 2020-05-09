import React from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
    const {avatar, name, title, time, content, replies, upvotes, downvotes} = props.data

    return(
        <div className="comment">
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="name">
                <b>{name} <span className="title">{title}</span></b> &middot; <span className="time">{time}</span>
            </div>
            <div className="content">
                {content}
            </div>
            <div className="actions">
                <button className="reply">REPLY</button>
                <span className="replycount">{replies} </span>
                <button className="replies">REPLIES</button>
                <span className="vote"><button><FontAwesomeIcon icon={faChevronUp} /></button>{upvotes}</span>
                <span className="vote"><button><FontAwesomeIcon icon={faChevronDown} /></button>{downvotes}</span>
            </div>
        </div>
    );
};

export default Comment;
