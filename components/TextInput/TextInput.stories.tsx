import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryColumn, StoryRow } from '../utils';
import { TextInput } from './TextInput';
import { FaUser } from 'react-icons/fa';

const meta = {
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: { label: 'Email', placeholder: 'example@email.com' },
};

export const WithIcon: Story = {
  args: { icon: FaUser },
};
