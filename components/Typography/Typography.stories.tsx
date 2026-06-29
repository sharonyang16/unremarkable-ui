import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';
import { type TypographyVariants } from './Typography.types';
import { StoryColumn } from '../utils';

const meta = {
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'label1',
  'label2',
  'body1',
  'body2',
] as TypographyVariants['variant'][];

export const Default: Story = {
  render: () => (
    <StoryColumn>
      {variants.map((variant) => (
        <Typography variant={variant}>{variant}</Typography>
      ))}
    </StoryColumn>
  ),
};

export const Colors: Story = {
  render: () => (
    <StoryColumn>
      <Typography color="primary">primary</Typography>
      <Typography color="secondary">secondary</Typography>
      <Typography color="inverse" className="bg-black dark:bg-white">
        inverse
      </Typography>
      <div className="text-blue-600">
        <Typography color="inherit">inherit</Typography>
      </div>
    </StoryColumn>
  ),
};
