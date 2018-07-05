import React from 'react';
import ReactDOM from 'react-dom';
import Pager from './';
import PagerItem from './components/PagerItem';

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
    <PagerItem
      label={10}
      active={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

