import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div>
        <h4>Add a comment below...</h4>
        <form>
          <input />
          <button type="submit"> Add comment ...</button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
