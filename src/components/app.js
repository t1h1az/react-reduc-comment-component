import React, { Component } from 'react';
import CommentBox from './CommentBox';

export default class App extends Component {
  render() {
    return (
      <div className="container"> 
        <div className="row red lighten-1" style={{margin: 0}}>
          <h1 className="center-align" style={{padding: 30, margin: 0, color: 'white'}}>Comment Box</h1>
        </div>
        <CommentBox />
        <div className="row red lighten-1" style={{margin: 0}}>
          <h1 className="center-align" style={{padding: 30, margin: 0, color: 'white'}}>List of comments</h1>
        </div>
      </div>
    );
  }
}
