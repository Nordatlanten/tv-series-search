import React from 'react';

import { ReturnButton } from '../components/return-button/return-button';

export default {
  title: 'Components/Return Button',
  component: ReturnButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ReturnButton {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: 'Back to search results',
  backgroundColor: 'rgba(0, 0, 0, 0.2)'
};
