import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {
  let commentBox;

  beforeEach(() => {
    commentBox = renderComponent(CommentBox);
  });

  it('has a the correct class', () => {
    expect(commentBox).to.have.class('comment-box');
  });

  it('has a header', () => {
    expect(commentBox.find('h5')).to.exist;
  });

  it('has text form', () => {
    expect(commentBox.find('textarea')).to.exist;
  });

  it('has a submit button', () => {
    expect(commentBox.find('button')).to.exist;
  });
});
