import { cva } from 'class-variance-authority';

export const textInputVariants = cva(
  'border-1 border-gray-400 focus-within:border-black dark:border-gray-300 dark:focus-within:border-white px-2 py-1 rounded-sm flex gap-2 items-center',
  {
    variants: {},
    defaultVariants: {},
  }
);
