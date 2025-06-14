import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Atoms/Typography',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    children: 'Swap anytime, anywhere.',
    variant: 'heading1',
  },
};

export const Title: Story = {
  args: {
    children: 'Connect Wallet',
    variant: 'title',
  },
};

export const Label: Story = {
  args: {
    children: 'Sell',
    variant: 'label',
  },
};

export const Caption: Story = {
  args: {
    children: '$0.00',
    variant: 'caption',
  },
};
