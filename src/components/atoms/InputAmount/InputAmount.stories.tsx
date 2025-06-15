import type { Meta, StoryObj } from '@storybook/react';
import { InputAmount } from './InputAmount';

const meta: Meta<typeof InputAmount> = {
  component: InputAmount,
  title: 'Atoms/InputAmount',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputAmount>;

export const Default: Story = {
  args: {
    value: '0',
    usdValue: '$0.00',
  },
};

export const WithValue: Story = {
  args: {
    value: '11.25',
    usdValue: '$4,291.25',
  },
};

export const Disabled: Story = {
  args: {
    value: 'Auto',
    usdValue: '',
    disabled: true,
  },
};
