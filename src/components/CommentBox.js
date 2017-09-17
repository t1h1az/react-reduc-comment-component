import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div className="row left-align">
        <h4>Add a comment below...</h4>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Textarea</label>
          </div>
        </div>
        <div className="row">
          <button className="waves-effect waves-light btn-large" type="submit"> Add comment ...</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
