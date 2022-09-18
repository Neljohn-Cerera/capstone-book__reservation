import { ComponentStory, ComponentMeta } from '@storybook/react';
import { iconCancel } from '../../assets/icons';
import Button from '../Button';

export default {
  title: 'Component/inputs',
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
