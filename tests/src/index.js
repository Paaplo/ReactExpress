var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
import { Home } from '../../src/components/Home/Home.js'; //my root-test lives in components/__tests__/, so this is how I require in my components.

describe('Home component', function () {
  it('renders without problems and h1 equals Home', function () {
    var component = TestUtils.renderIntoDocument(
      <Home />
    );
    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );
    expect(h1.textContent)
    .toEqual("Home");
  });
});
