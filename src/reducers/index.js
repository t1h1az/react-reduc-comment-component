import { combineReducers } from 'redux';
import commentListReducer from './commentListReducer';
// import newCommentReducer from './newCommentReducer';

const rootReducer = combineReducers({
  // newComment: newCommentReducer,
  commentList: commentListReducer
});

export default rootReducer;
