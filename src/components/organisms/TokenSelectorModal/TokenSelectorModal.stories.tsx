// src/components/organisms/TokenSelectorModal/TokenSelectorModal.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TokenSelectorModal } from './TokenSelectorModal';

const meta: Meta<typeof TokenSelectorModal> = {
  title: 'Organisms/TokenSelectorModal',
  component: TokenSelectorModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TokenSelectorModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Closed'),
    onSelect: (token) => console.log('Selected:', token),
    tokenList: [
      { symbol: 'ETH', name: 'Ethereum', address: '0xabc' },
      { symbol: 'USDC', name: 'USD Coin', address: '0xdef' },
      { symbol: 'USDT', name: 'Tether', address: '0xghi' },
      { symbol: 'WBTC', name: 'Wrapped Bitcoin', address: '0xjkl' },
    ],
  },
};
