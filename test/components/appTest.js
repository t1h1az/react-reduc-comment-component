// Here the app component is tested
// We import 2 TestHelper
import { renderComponent, expect } from '../test_helper.js';
// import component
import App from '../../src/components/app';

// Describe groups similar tests
describe('App Component Testing', () => {

  // use it to test a single attribute of a target
  it('shows the correct test', (done) => {
    const component = renderComponent(App);
  // use expect to make an assertion about an target
    expect(component).to.contain(' render this');
    done();
  });
});
