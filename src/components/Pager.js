import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PagerButton, { Intent } from './PagerButton';
import { extractProps } from '../utils/props';
import styles from './Pager.css';

class Pager extends Component {

  calculateLimits(length, current, expansion) {
    let start = current - expansion;
    let end = current + expansion;

    if (start < 1) {
      end += 1 - start;
      start = 1;
    }

    if (end > length) {
      end = length;
    }

    return { start, end };
  }

  renderItems(limits, current, length) {
    const {
      showPrevNextButtons, prevLabel, nextLabel,
      showRestLabels, restLabel,
      showFirstButton, firstButtonLabel,
      showLastButton, lastButtonLabel,
      onChange,
    } = this.props;

    const items = [];

    // first button
    if (showFirstButton && limits.start > 1)
      items.push(
        <PagerButton
          key="go-first"
          intent={Intent.GOFIRST}
          label={firstButtonLabel}
          onClick={() => onChange(1)}
        />
      );

    // prev button
    if (showPrevNextButtons)
      items.push(
        <PagerButton
          key="prev"
          intent={Intent.PREV}
          label={prevLabel}
          disabled={current === limits.start}
          onClick={() => onChange(current - 1)}
        />
      );

    // left rest label
    if (showRestLabels && limits.start > 1)
      items.push(
        <PagerButton
          key="rest-left"
          intent={Intent.REST}
          label={restLabel}
          disabled={true}
        />
      );

    // pages
    for (let i = limits.start; i <= limits.end; i++)
      items.push(
        <PagerButton
          key={i}
          intent={Intent.GO}
          label={i}
          active={current === i}
          onClick={() => onChange(i)}
        />
      );

    // right rest label
    if (showRestLabels && length > limits.end) {
      items.push(
        <PagerButton
          key="rest-right"
          intent={Intent.REST}
          label={restLabel}
          disabled={true}
        />
      );
    }

    // next button
    if (showPrevNextButtons)
      items.push(
        <PagerButton
          key="next"
          intent={Intent.NEXT}
          label={nextLabel}
          disabled={current === limits.end}
          onClick={() => onChange(current + 1)}
        />
      );

    // last button
    if (showLastButton && limits.end < length)
      items.push(
        <PagerButton
          key="go-last"
          intent={Intent.GOLAST}
          label={lastButtonLabel}
          onClick={() => onChange(length)}
        />
      );

    return items;
  }

  render() {
    const { length, current, expansion } = this.props;
    const limits = this.calculateLimits(length, current, expansion);
    const otherProps = extractProps(this.props, Object.keys(Pager.propTypes));

    return (
      <div
        {...otherProps}
        className={classNames('Pager', styles.Pager, otherProps.className)}
      >
        {this.renderItems(limits, current, length)}
      </div>
    );
  }

}

Pager.propTypes = {
  length: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  expansion: PropTypes.number,
  showRestLabels: PropTypes.bool,
  restLabel: PropTypes.any,
  showPrevNextButtons: PropTypes.bool,
  prevLabel: PropTypes.any,
  nextLabel: PropTypes.any,
  showFirstButton: PropTypes.bool,
  firstButtonLabel: PropTypes.any,
  showLastButton: PropTypes.bool,
  lastButtonLabel: PropTypes.any,
  onChange: PropTypes.func,
}

Pager.defaultProps = {
  expansion: 2,
  showRestLabels: true,
  restLabel: '...',
  showPrevNextButtons: true,
  prevLabel: '<',
  nextLabel: '>',
  showFirstButton: true,
  firstButtonLabel: 'First',
  showLastButton: true,
  lastButtonLabel: 'Last',
  onChange: () => { },
}

export default Pager;