import { cva } from 'class-variance-authority';

export const buttonVariants = cva('cursor-pointer rounded-sm', {
  variants: {
    variant: {
      solid:
        'bg-black transition-colors text-white dark:bg-white dark:text-black hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 dark:hover:bg-gray-100 dark:active:bg-gray-100 dark:focus:bg-gray-100',
      outline:
        'border-1 transition-colors border-black dark:border-white hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-800 dark:focus:bg-gray-800',
      ghost:
        'transition-colors hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:active:bg-gray-900 dark:focus:bg-gray-900',
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
    { kind: 'button', size: 'sm', class: 'px-2 py-1' },
    { kind: 'button', size: 'md', class: 'px-3 py-2' },
    { kind: 'button', size: 'lg', class: 'px-4 py-3' },
    { kind: 'icon', size: 'sm', class: 'p-1' },
    { kind: 'icon', size: 'md', class: 'p-2' },
    { kind: 'icon', size: 'lg', class: 'p-3' },
  ],

  defaultVariants: {
    variant: 'solid',
    size: 'md',
    kind: 'button',
  },
});
