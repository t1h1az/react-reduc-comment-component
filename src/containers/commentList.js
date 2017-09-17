import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  renderCommentList(singleComment) {
    console.log(singleComment);
    return <li key={singleComment}>{singleComment}</li>
  }

  render() {
    return (
      <ul>
        {this.props.commentList.map(this.renderCommentList)}
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return { commentList: state.commentList};
}

export default connect(mapStateToProps)(CommentList);
