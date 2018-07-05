import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './';
import PagerButton from './components/PagerButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Pager
      length={17}
      current={10}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PagerButton
      label={10}
      active={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

