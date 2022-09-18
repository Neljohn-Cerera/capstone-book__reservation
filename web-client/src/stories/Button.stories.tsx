import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { iconCancel } from '../assets/icons';

export default {
  title: 'Component/buttons',
  component: Button,
  argTypes: {
    iconPath: { control: '-' },
    textColor: { control: '-' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  icon: 'left',
  text: 'Submit',
  bgColor: 'blue',
  iconPath: iconCancel,
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: 'left',
  text: 'Secondary',
  iconPath: iconCancel,
  bgColor: 'gray',
};

export const Danger = Template.bind({});
Danger.args = {
  icon: 'left',
  text: 'Secondary',
  iconPath: iconCancel,
  bgColor: 'red',
};

export const Warning = Template.bind({});
Warning.args = {
  icon: 'left',
  text: 'Secondary',
  iconPath: iconCancel,
  bgColor: 'yellow',
};
