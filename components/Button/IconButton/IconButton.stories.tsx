import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryColumn, StoryRow } from '../../utils';
import { IconButton } from './IconButton';
import { ButtonVariants } from '../Button.types';
import {
  FaBirthdayCake,
  FaCode,
  FaInfoCircle,
  FaMap,
  FaUser,
} from 'react-icons/fa';

const meta = {
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = ['solid', 'outline', 'ghost'] as ButtonVariants['variant'][];

const sizes = ['sm', 'md', 'lg'] as ButtonVariants['size'][];

export const Default: Story = {
  args: { variant: 'solid', size: 'md', icon: FaInfoCircle },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    icon: FaMap,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    icon: FaCode,
  },
};

export const Sizes: Story = {
  args: {
    icon: FaUser,
  },
  render: (args) => (
    <StoryRow>
      {variants.map((variant) => (
        <StoryColumn>
          {sizes.map((size) => (
            <IconButton {...args} variant={variant} size={size} />
          ))}
        </StoryColumn>
      ))}
    </StoryRow>
  ),
};

export const WithCustomClasses = {
  render: () => (
    <StoryColumn>
      <IconButton icon={FaBirthdayCake} className="rounded-full" />
    </StoryColumn>
  ),
};
