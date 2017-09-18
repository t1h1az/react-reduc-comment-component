// Here the app component is tested
// We import 2 TestHelper
import { renderComponent, expect } from '../test_helper';
// import component
import App from '../../src/components/app';

// Describe groups similar tests
describe('App', () => {
  let component;
  // create the component before each test
  beforeEach(() => {
    component = renderComponent(App);
  });
  // use it to test a single attribute of a target

  it('shows a comment box', () => {
  // use expect to make an assertion about an target
    expect(component.find('.comment-box')).to.exist;

  });
});
