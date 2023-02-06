import React from 'react';
import PropTypes from 'prop-types';
import styles from './return-button.module.scss';
import { ReactComponent as BackIcon } from '../../public/icons/back-arrow.svg'
import { useRouter } from "next/router";


export const ReturnButton = ({ label, backgroundColor, ...props }) => {
  const router = useRouter();
  const handleClick = () => {
    let href = { pathname: "/", query: {} };
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className={[styles['return-button']].join(' ')}
      {...props}
      style={{backgroundColor: backgroundColor}}
    >
     <img src="/icons/back-arrow.svg" /> {label}
    </button>
  );
};

ReturnButton.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

ReturnButton.defaultProps = {
  label: "Back to search results",
  backgroundColor: "rgba(0, 0, 0, 0.2)"
};
