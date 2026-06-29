import { cva } from 'class-variance-authority';
import { cn } from '../utils';
import { typographyVariants } from '../Typography/Typography.variants';

export const chipVariants = cva('inline-flex items-center rounded-full w-fit', {
  variants: {
    variant: {
      solid: 'bg-black dark:bg-white',
      subtle: 'bg-gray-200 dark:bg-gray-800',
      outline: 'border-1 border-black dark:border-white',
    },
    size: {
      sm: cn('py-0.5 px-2', typographyVariants({ variant: 'body2' })),
      md: 'py-1 px-2.5',
      lg: 'py-1.5 px-3',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
