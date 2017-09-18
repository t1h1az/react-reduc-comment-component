import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { saveComment } from '../actions/index';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      comment: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  };

  onHandleChange(event) {
    this.setState({comment: event.target.value});
  };

  render() {
    return (
      <div className="comment-box row center-align" style={{margin: 0, padding: 20, border: "1px solid #e53935"}}>
        <h5 style={{padding: 20}}>Add a comment below...</h5>
          <div className="row">
            <form
               className="col s12"
               onSubmit={this.onSubmit.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    className="materialize-textarea"
                    value={this.state.comment}
                    onChange={this.onHandleChange.bind(this)}></textarea>
                </div>
              </div>
              <div className="row" style={{padding: 20}}>
                <button
                  className="waves-effect waves-light btn-large"
                  type="submit"
                  action="submit"> Add comment ...</button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ saveComment }, dispatch);
}

export default connect(null, actions)(CommentBox);
