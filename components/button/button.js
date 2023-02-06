import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';


export const Button = ({ label, backgroundColor, ...props }) => {
  return (
    <button
      type="submit"
      className={[styles['button']].join(' ')}
      {...props}
      style={{backgroundColor: backgroundColor}}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

Button.defaultProps = {
  label: "Search",
  backgroundColor: "#00A496"
};
