import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  renderCommentList(singleComment) {
    return (
      <div>
        <li
          className="row center-align"
          key={singleComment}
          style={{margin: 20, padding: 20}}>
            {singleComment}
        </li>
      </div>
    );
  }

  render() {
    return (
      <ul style={{margin: 0, padding: 20, border: "1px solid #e53935"}}>
        {this.props.commentList.map(this.renderCommentList)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { commentList: state.commentList};
}

export default connect(mapStateToProps)(CommentList);
