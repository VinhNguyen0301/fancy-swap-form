import type { Meta, StoryObj } from '@storybook/react';
import { SwapPageLayout } from './SwapPageLayout';
import { Hero } from '@/components/organisms/HeroSection/HeroSection';
import { SwapForm } from '@/components/organisms/SwapForm/SwapForm';
import { BackgroundParticles } from '@/components/atoms/BackgroundParticles';

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
           <BackgroundParticles />
            <Hero />

          <SwapForm />
    </SwapPageLayout>
    ),
  },
};
