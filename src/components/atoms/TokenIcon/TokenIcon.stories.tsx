import type { Meta, StoryObj } from '@storybook/react';
import { TokenIcon } from './TokenIcon';

const meta: Meta<typeof TokenIcon> = {
  component: TokenIcon,
  title: 'Atoms/TokenIcon',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TokenIcon>;

export const ETH: Story = {
  args: {
    symbol: 'ETH',
    size: 32,
  },
};

export const USDC: Story = {
  args: {
    symbol: 'USDC',
    size: 32,
  },
};
