import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () =>{
  it('has a the correct class', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect(commentBox).to.have.class('comment-box');
    done();
  });

  it('has a header', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect(commentBox.find('h5')).to.exist;
    done();
  });

  it('has text form', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect(commentBox.find('textarea')).to.exist;
    done();
  });

  it('has a submit button', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect(commentBox.find('button')).to.exist;
    done();
  });

});
