import React, { Component } from 'react';
import { connect } from 'react-redux';


const CommentList = (props) => {
  const list = props.comments.map((comment) => {
    return (
      <li
        className="row center-align"
        key={comment}
        style={{margin: 0, padding: 20, borderBottom: "1px solid #e53935", borderRight: "1px solid #e53935", borderLeft: "1px solid #e53935"}}>
            {comment}
        </li>
      );
  });

    return (
      <ul
        className="comment-list"
        style={{margin: 0, padding: 0}}>
        {list}
      </ul>
    );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
