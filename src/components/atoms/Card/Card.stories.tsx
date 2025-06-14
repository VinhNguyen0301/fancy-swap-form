import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <div className="text-center text-black">This is a card</div>,
  },
};

export const WithCustomPadding: Story = {
  args: {
    className: 'p-8',
    children: <div className="text-center text-black">Card with extra padding</div>,
  },
};
