# react-pager-component

> Pager component for React

[![NPM](https://img.shields.io/npm/v/react-pager-component.svg)](https://www.npmjs.com/package/react-pager-component) ![Travis](https://api.travis-ci.org/emr/react-pager-component.svg?branch=master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![screenshot](https://raw.githubusercontent.com/emr/react-pager-component/master/doc/example.png)

## Install

```bash
yarn add react-pager-component
```
or
```bash
npm install --save react-pager-component
```

## Usage

```jsx
import React, { Component } from 'react';
import Pager from 'react-pager-component';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 37,
    }
  }
  render () {
    return (
      <Pager
        length={84}
        current={this.state.current}
        expansion={3}
        onChange={ current => this.setState({ current }) }
      />
    )
  }
}
```

## Props

| Prop | Description | Type | Required | Default |
| - | - | - | - | - |
| `length` | Total page count | `number` | `required` |
| `current` | Current page number | `number` | `required` |
| `expansion` | Left and right expansion number from current number | `number` |  | 2 |
| `showRestLabels` | Show rest labels (...) | `bool` |  | `true` |
| `restLabel` | Rest button label | `*` |  | ... |
| `showPrevNextButtons` | Show Prev and Next Buttons | `bool` |  | `true` |
| `prevLabel` | Previous button label | `*` |  | &lt; |
| `nextLabel` | Next button label | `*` |  | &gt; |
| `showFirstButton` | Show "Go first" button | `bool` |  | `true` |
| `firstButtonLabel` | "Go first" button label | `*` |  | First |
| `showLastButton` | Show "Go last" button | `bool` |  | `true` |
| `lastButtonLabel` | "Go last" button label | `*` |  | Last |
| `onChange` | Returns new page number | `function` |  |  |

Also, you can use other html props.

## Customization

```scss
/*** pager container style ***/
.Pager {
  /* styles */
}

/*** button styles ***/
.Pager .PagerButton {
  /* base button styles */

  /** styles by intent **/
  &--Prev {
    /* previous button style */
  }
  &--Next {
    /* next button style */
  }
  &--Go {
    /* numeric button style */
  }
  &--Rest {
    /* disabled rest button style */
  }
  &--GoFirst {
    /* go first button style */
  }
  &--GoLast {
    /* go last button style */
  }

  /** styles by state **/
  &-is-active {
    /* active button style */
  }
  &-is-disabled {
    /* disabled button style */
  }
}
```

## License

MIT © [emr](https://github.com/emr)
