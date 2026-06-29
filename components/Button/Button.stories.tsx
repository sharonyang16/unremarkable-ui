import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryColumn, StoryRow } from '../utils';
import { Button } from './Button';
import { ButtonVariants } from './Button.types';
import { FaClock, FaList, FaInfoCircle } from 'react-icons/fa';

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = ['solid', 'outline', 'ghost'] as ButtonVariants['variant'][];

const sizes = ['sm', 'md', 'lg'] as ButtonVariants['size'][];

export const Default: Story = {
  args: { variant: 'solid', size: 'md', children: 'Button' },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <StoryRow>
      {variants.map((variant) => (
        <StoryColumn>
          {sizes.map((size) => (
            <Button {...args} variant={variant} size={size} />
          ))}
        </StoryColumn>
      ))}
    </StoryRow>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <StoryColumn>
      <Button variant="ghost" size="sm">
        <FaInfoCircle /> Button
      </Button>
      <Button variant="outline" size="md">
        Button
        <FaClock />
      </Button>
      <Button variant="solid" size="lg">
        <FaList />
      </Button>
    </StoryColumn>
  ),
};

export const WithCustomClasses = {
  render: () => (
    <StoryColumn>
      <Button className="px-8">Button</Button>
      <Button variant="ghost" size="lg" className="underline">
        Button
      </Button>
    </StoryColumn>
  ),
};
