import React from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor } from './styles';

const Anchor = ({ to = '#', text = '', className, onClick = () => null }) => (
  <StyledAnchor
    href={to}
    target="_blank"
    className={className}
    onClick={onClick}
  />
);

Anchor.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Anchor.defaultProps = {
  disabled: false,
  to: '#',
  text: '',
  onClick: () => null,
};

export default Anchor;
