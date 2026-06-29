import { cva } from 'class-variance-authority';
import { buttonVariants } from '../Button/Button.variants';
import { typographyVariants } from '../Typography/Typography.variants';

export const linkVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      plain: 'text-black dark:text-white',
      buttonSolid: buttonVariants({ variant: 'solid', kind: 'button' }),
      buttonOutline: buttonVariants({ variant: 'outline', kind: 'button' }),
      iconButtonSolid: buttonVariants({ variant: 'solid', kind: 'icon' }),
      iconButtonOutline: buttonVariants({ variant: 'outline', kind: 'icon' }),
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  compoundVariants: [
    {
      variant: 'plain',
      size: 'sm',
      class: typographyVariants({ variant: 'body2' }),
    },
    {
      variant: 'plain',
      size: 'md',
      class: typographyVariants({
        variant: 'body1',
      }),
    },
    {
      variant: 'plain',
      size: 'lg',
      class: typographyVariants({
        variant: 'h6',
      }),
    },

    {
      variant: 'buttonSolid',
      size: 'sm',
      class: buttonVariants({ variant: 'solid', kind: 'button', size: 'sm' }),
    },
    {
      variant: 'buttonSolid',
      size: 'md',
      class: buttonVariants({ variant: 'solid', kind: 'button', size: 'md' }),
    },
    {
      variant: 'buttonSolid',
      size: 'lg',
      class: buttonVariants({ variant: 'solid', kind: 'button', size: 'lg' }),
    },

    {
      variant: 'buttonOutline',
      size: 'sm',
      class: buttonVariants({ variant: 'outline', kind: 'button', size: 'sm' }),
    },
    {
      variant: 'buttonOutline',
      size: 'md',
      class: buttonVariants({ variant: 'outline', kind: 'button', size: 'md' }),
    },
    {
      variant: 'buttonOutline',
      size: 'lg',
      class: buttonVariants({ variant: 'outline', kind: 'button', size: 'lg' }),
    },

    {
      variant: 'iconButtonSolid',
      size: 'sm',
      class: buttonVariants({ variant: 'solid', kind: 'icon', size: 'sm' }),
    },
    {
      variant: 'iconButtonSolid',
      size: 'md',
      class: buttonVariants({ variant: 'solid', kind: 'icon', size: 'md' }),
    },
    {
      variant: 'iconButtonSolid',
      size: 'lg',
      class: buttonVariants({ variant: 'solid', kind: 'icon', size: 'lg' }),
    },

    {
      variant: 'iconButtonOutline',
      size: 'sm',
      class: buttonVariants({ variant: 'outline', kind: 'icon', size: 'sm' }),
    },
    {
      variant: 'iconButtonOutline',
      size: 'md',
      class: buttonVariants({ variant: 'outline', kind: 'icon', size: 'md' }),
    },
    {
      variant: 'iconButtonOutline',
      size: 'lg',
      class: buttonVariants({ variant: 'outline', kind: 'icon', size: 'lg' }),
    },
  ],
  defaultVariants: {
    variant: 'plain',
    size: 'md',
  },
});
