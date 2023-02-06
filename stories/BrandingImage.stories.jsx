import React from 'react';

import { BrandingImage } from '../components/branding-image/branding-image.js';

export default {
  title: 'Components/Branding Image',
  component: BrandingImage,
};

const Template = (args) => <BrandingImage {...args} />;

export const TvMaze = Template.bind({});
TvMaze.args = {
  source: 'Branding.svg',
  alternative: 'TVMAZE Branding Image'
};
