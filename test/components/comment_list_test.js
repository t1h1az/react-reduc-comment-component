import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/containers/comment_list';

describe('Commentlist', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'another new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('has a the correct class', () => {
    expect(component).to.have.class('comment-list');
  });

  it('has a li item for every comment', () => {
    expect(component.find('li')).to.exist;
  });

  it('has list item with value', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('another new comment');
  });
});
