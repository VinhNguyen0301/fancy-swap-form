import type { Meta, StoryObj } from '@storybook/react';
import { TokenSelector, Token } from './TokenSelector';

const meta: Meta<typeof TokenSelector> = {
  component: TokenSelector,
  title: 'Molecules/TokenSelector',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TokenSelector>;

const mockTokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'DAI', name: 'Dai' },
];

export const Default: Story = {
  args: {
    selected: mockTokens[0],
    tokenList: mockTokens,
    onSelect: (t: Token) => alert(`Selected ${t.symbol}`),
  },
};
