/**
 * Extract non html props from all props.
 * @param {object} props All props.
 * @param {Array} propNames Prop names to be removed.
 */4
export function extractProps(props, propNames) {
  const elProps = Object.assign({}, props);

  for (const prop of propNames)
    delete elProps[prop];

  return elProps;
}