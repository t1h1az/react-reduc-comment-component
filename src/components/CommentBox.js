import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box row center-align" style={{margin: 0, padding: 20, border: "1px solid #e53935"}}>
        <h5 style={{padding: 20}}>Add a comment below...</h5>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
                  <label for="textarea1"></label>
                </div>
              </div>
            </form>
          </div>
        <div className="row" style={{padding: 20}}>
          <button className="waves-effect waves-light btn-large" type="submit"> Add comment ...</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
