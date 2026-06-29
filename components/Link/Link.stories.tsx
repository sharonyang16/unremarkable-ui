import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';
import { FaCodepen, FaSun } from 'react-icons/fa';

const meta = {
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'plain', children: 'Link' },
};

export const ButtonSolid: Story = {
  args: { variant: 'buttonSolid', children: 'Link' },
};

export const ButtonOutline: Story = {
  args: { variant: 'buttonOutline', children: 'Link' },
};

export const IconButtonSolid: Story = {
  args: { variant: 'iconButtonSolid', children: <FaSun /> },
};

export const IconButtonOutline: Story = {
  args: { variant: 'iconButtonOutline' },
  render: (args) => (
    <Link {...args}>
      <FaCodepen />
    </Link>
  ),
};
