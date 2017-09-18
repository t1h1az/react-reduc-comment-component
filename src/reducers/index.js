import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
// import newCommentReducer from './newCommentReducer';

const rootReducer = combineReducers({
  // newComment: newCommentReducer,
  comments: commentsReducer
});

export default rootReducer;
