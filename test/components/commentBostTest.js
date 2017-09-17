import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () =>{
  it('has a header', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect(commentBox.find('h4')).to.exist;
    done();
  });

  it('has text form', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect(commentBox.find('form')).to.exist;
    done();
  });

  it('has a submit button', (done) => {
    const commentBox = renderComponent(CommentBox);

    expect(commentBox.find('button')).to.exist;
    done();
  });

});
