import type { Meta, StoryObj } from '@storybook/react';
import { SwapPageLayout } from './SwapPageLayout';
import { Hero } from '@/components/organisms/HeroSection/HeroSection';
import { SwapForm } from '@/components/organisms/SwapForm/SwapForm';
import { Card } from '@/components/atoms/Card/Card';

const meta: Meta<typeof SwapPageLayout> = {
  title: 'Templates/SwapPageLayout',
  component: SwapPageLayout,
};

export default meta;
type Story = StoryObj<typeof SwapPageLayout>;

export const Default: Story = {
  args: {
    children: (
        <SwapPageLayout>
            <Hero />

          <SwapForm />
    </SwapPageLayout>
    ),
  },
};
