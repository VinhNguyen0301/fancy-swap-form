// SwapForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SwapForm } from './SwapForm';

const meta: Meta<typeof SwapForm> = {
  title: 'Organisms/SwapForm',
  component: SwapForm,
};

export default meta;
type Story = StoryObj<typeof SwapForm>;

export const Default: Story = {};
