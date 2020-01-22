import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ className, id, onClick, title, disabled }) => (
  <StyledButton
    id={id}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  /**
   When a button is in the loading state you can supply custom text
  */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export { Button };
