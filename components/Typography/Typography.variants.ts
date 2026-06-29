import { cva } from 'class-variance-authority';

export const typographyVariants = cva('leading-[1.25]', {
  variants: {
    variant: {
      h1: 'font-semibold text-[64px] font-serif',
      h2: 'font-semibold text-[48px] font-serif',
      h3: 'font-semibold text-[36px] font-serif',
      h4: 'font-semibold text-xl',
      h5: 'font-semibold text-lg',
      h6: 'font-semibold text-base',
      label1: 'font-medium text-base',
      label2: 'font-medium text-sm',
      body1: 'font-normal text-base',
      body2: 'font-normal text-sm',
    },
    color: {
      primary: 'text-black dark:text-white',
      secondary: 'text-gray-700 dark:text-gray-300',
      inverse: 'text-white dark:text-black',
      inherit: 'text-inherit',
    },
  },
  defaultVariants: {
    variant: 'body1',
    color: 'primary',
  },
});
