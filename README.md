# react-pager-component

> Pager component for React

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
| `onChange` | Gives new page number | `function` |  |  |

> Also, you can use other html props.

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
    /* previous button styles */
  }
  &--Next {
    /* next button styles */
  }
  &--Go {
    /* numeric buttons styles */
  }
  &--Rest {
    /* disabled rest button styles */
  }
  &--GoFirst {
    /* go first button styles */
  }
  &--GoLast {
    /* go last button styles */
  }

  /** styles by state **/
  &.is-active {
    /* active button styles */
  }
  &.is-disabled {
    /* disabled button styles */
  }
}
```
