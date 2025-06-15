import type { Meta, StoryObj } from '@storybook/react';
import { SearchToken } from './SearchToken';

const meta: Meta<typeof SearchToken> = {
  component: SearchToken,
  title: 'Atoms/SearchToken',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchToken>;

export const Default: Story = {
  args: {
    value: '0',
    usdValue: '$0.00',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Search Value',
    usdValue: '$4,291.25',
  },
};


