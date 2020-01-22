import React from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor } from './styles';

const Anchor = ({ to, text, className, onClick = () => null }) => (
  <StyledAnchor
    href={to}
    target="_blank"
    className={className}
    onClick={onClick}
  >
    {text}
  </StyledAnchor>
);

Anchor.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Anchor.defaultProps = {
  disabled: false,
  to: '#',
  onClick: () => null,
};

export { Anchor };
