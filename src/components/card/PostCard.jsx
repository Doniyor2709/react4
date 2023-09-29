import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./PostCard.css";

export class PostCard extends Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <div className="cards">
        <div className="text">
        <Link to={`/posts/${id}`}>
          {id}.{title}
        </Link>
        <p>{body}</p>
        </div>
        <div className="text">
        <Link to={`/posts/${id}`}>
          {id}.{title}
        </Link>
        <p>{body}</p>
        </div>
        
      </div>
    );
  }
}

export default PostCard;
