import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () =>{
  it('has a header', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect($('h4')).should.exist;
    done();
  });

  it('has text form', (done) => {
    const commentBox = renderComponent(CommentBox);
    done();
  });

  it('has a submit button', (done) => {
    const commentBox = renderComponent(CommentBox);
    done();
  });

});
