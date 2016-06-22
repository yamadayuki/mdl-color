import React from 'react';
import { render } from 'react-dom';
import { cyan50, primaryDarkText } from './src';

render(
  <div
    style={{
      width: 200,
      backgroundColor: cyan50,
    }}
  >
    <p
      style={{
        color: primaryDarkText,
        lineHight: 6,
      }}
    >
      Hello MDL color!
    </p>
  </div>,
  document.querySelector('#component')
);
