import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Atoms/Divider',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: 'h-10',
  },
};
