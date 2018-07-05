import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './PagerButton.css';

export const Intent = {
  GO: 'PagerButton--Go',
  PREV: 'PagerButton--Prev',
  NEXT: 'PagerButton--Next',
  REST: 'PagerButton--Rest',
  GOFIRST: 'PagerButton--GoFirst',
  GOLAST: 'PagerButton--GoLast',
}

class PagerButton extends Component {
  render() {
    const { intent, active, disabled, label, children, ...props } = this.props;

    props.className = classNames(
      // base classes
      ['PagerButton', styles.PagerButton],
      // state classes
      {
        'is-disabled': disabled,
        [styles['is-disabled']]: disabled,
        'is-active': active,
        [styles['is-active']]: active,
      },
      // intent classes
      typeof intent === 'string' ? [intent] : intent
    );

    if (disabled)
      props.onClick = null;

    return <div {...props}>
      {children || label}
    </div>
  }
}

PagerButton.propTypes = {
  intent: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.any,
  children: PropTypes.any,
}

PagerButton.defaultProps = {
  active: false,
  disabled: false,
}

export default PagerButton;