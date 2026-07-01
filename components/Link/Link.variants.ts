import { cva } from 'class-variance-authority';
import { buttonVariants } from '../Button/Button.variants';
import { textSizes, textColors } from '../baseStyles';

export const linkVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      plain: textColors.primary,
      buttonSolid: '',
      buttonOutline: '',
      iconButtonSolid: '',
      iconButtonOutline: '',
    },
    size: {
      sm: textSizes.body2,
      md: textSizes.body1,
      lg: textSizes.h6,
    },
  },
  compoundVariants: [
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
