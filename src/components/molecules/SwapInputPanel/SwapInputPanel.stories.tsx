import { SwapInputPanel } from './SwapInputPanel';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SwapInputPanel> = {
  component: SwapInputPanel,
  title: 'Molecules/SwapInputPanel',
};

export default meta;

type Story = StoryObj<typeof SwapInputPanel>;

const dummyTokens = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'USDC', name: 'USD Coin' },
];

export const Default: Story = {
  args: {
    label: 'Sell',
    amount: '0',
    token: dummyTokens[0],
    tokenList: dummyTokens,
    onAmountChange: (val) => console.log('Amount', val),
    onTokenChange: (token) => console.log('Token', token),
    usdValue: '0.00',
  },
};
