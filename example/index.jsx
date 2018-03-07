// package
import React, { Component } from 'react';
import { render } from 'react-dom';
import Github from "../dist/index.js";

export default class Root extends Component {
  render() {
    return (
		<div>
      <Github/>
		</div>
    );
  }
}

render(
  <Root />,
  document.getElementById('root'),
);
