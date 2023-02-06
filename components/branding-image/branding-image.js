import React from "react";
import Image from "next/image";
import PropTypes from 'prop-types';
import brandingSvg from '../../public/images/Branding.svg'

import styles from "./branding-image.module.scss";


export const BrandingImage = ({alternative, ...props }) => {
  return (
   <Image
    src={brandingSvg}
    alt={alternative}
    sizes="(max-width: 1024px) 160px,
    253px"
    width={300}
    height={80}
    {...props}
   />
  );
};

BrandingImage.propTypes = {

  alternative: PropTypes.string.isRequired,
};

BrandingImage.defaultProps = {
  alternative: "Example alternative text.",
};
  