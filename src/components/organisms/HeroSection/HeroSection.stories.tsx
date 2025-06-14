import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './HeroSection';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/HeroSection',
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
