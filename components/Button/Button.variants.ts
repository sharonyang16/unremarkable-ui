import { cva } from 'class-variance-authority';
import { textSizes, textColors } from '../baseStyles';

export const buttonVariants = cva('cursor-pointer rounded-sm', {
  variants: {
    variant: {
      solid: `${textColors.inverse} bg-black transition-colors hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 dark:hover:bg-gray-100 dark:active:bg-gray-100 dark:focus:bg-gray-100`,
      outline: `${textColors.primary} border-1 border-black transition-colors dark:border-white hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-800 dark:focus:bg-gray-800`,
      ghost: `${textColors.primary} transition-colors hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:active:bg-gray-900 dark:focus:bg-gray-900`,
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    kind: {
      button: '',
      icon: 'inline-flex',
    },
  },
  compoundVariants: [
    { kind: 'button', size: 'sm', class: `px-2 py-1 ${textSizes.label2}` },
    { kind: 'button', size: 'md', class: `px-3 py-2 ${textSizes.label1}` },
    { kind: 'button', size: 'lg', class: `px-4 py-3 ${textSizes.h6}` },
    { kind: 'icon', size: 'sm', class: `p-1 ${textSizes.label2}` },
    { kind: 'icon', size: 'md', class: `p-2 ${textSizes.h5}` },
    { kind: 'icon', size: 'lg', class: `p-3 ${textSizes.h4}` },
  ],

  defaultVariants: {
    variant: 'solid',
    size: 'md',
    kind: 'button',
  },
});
