import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import jsdom from 'jsdom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// & tries to usee browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
//global instead of window cause
const $ = _$(window);
// to get elements with jquery we need

//build "renderCOmponent" helper that should render a givien react class
function renderComponent(ComponentClass, props, state ) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

//
// set up testing evnrionment to run like a browser in the command line
  // $() wraps everything in the jqurey helper

// build helper for simulating elements


export {renderComponent, expect};

// set up chai jquery
