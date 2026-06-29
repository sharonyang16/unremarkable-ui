import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryColumn, StoryRow } from '../utils';
import { Chip } from './Chip';
import { ChipVariants } from './Chip.types';

const meta = {
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

const varaints = ['solid', 'subtle', 'outline'] as ChipVariants['variant'][];
const sizes = ['sm', 'md', 'lg'] as ChipVariants['size'][];

export const Default: Story = {
  args: { variant: 'solid', children: 'Chip' },
};

export const Subtle: Story = {
  args: { variant: 'subtle', children: 'Chip' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Chip' },
};

export const Sizes: Story = {
  args: {
    children: 'Chip',
  },
  render: (args) => (
    <StoryRow>
      {varaints.map((variant) => (
        <StoryColumn>
          {sizes.map((size) => (
            <Chip {...args} variant={variant} size={size} />
          ))}
        </StoryColumn>
      ))}
    </StoryRow>
  ),
};

export const WithCustomClasses = {
  render: () => (
    <StoryColumn>
      <Chip className="bg-red-700">Danger</Chip>
    </StoryColumn>
  ),
};
