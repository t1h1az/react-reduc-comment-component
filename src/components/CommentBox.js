import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: ''};
  }

  onHandleChange(event) {
    this.setState({comment: event.target.value});
  };

  render() {
    return (
      <div className="comment-box row center-align" style={{margin: 0, padding: 20, border: "1px solid #e53935"}}>
        <h5 style={{padding: 20}}>Add a comment below...</h5>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    className="materialize-textarea"
                    value={this.state.comment}
                    onChange={this.onHandleChange.bind(this)}></textarea>
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
