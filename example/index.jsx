// package
import React, { Component } from 'react';
import { render } from 'react-dom';
import Github from "../lib/index.jsx";

// import '../lib/index.less';

export default class Root extends Component {
  render() {
    return (
		<div className="github">
      <Github name="yinxin630"/>
		</div>
    );
  }
}

render(
  <Root />,
  document.getElementById('root'),
);
