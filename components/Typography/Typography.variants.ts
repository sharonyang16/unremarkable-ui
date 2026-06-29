import { cva } from 'class-variance-authority';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-semibold text-[64px] font-serif leading-[1.25]',
      h2: 'font-semibold text-[48px] font-serif leading-[1.25]',
      h3: 'font-semibold text-[36px] font-serif leading-[1.25]',
      h4: 'font-semibold text-xl leading-[1.25]',
      h5: 'font-semibold text-lg leading-[1.25]',
      h6: 'font-semibold text-base leading-[1.25]',
      label1: 'font-medium text-base leading-[1.25]',
      label2: 'font-medium text-sm leading-[1.25]',
      body1: 'font-normal text-base leading-[1.25]',
      body2: 'font-normal text-sm leading-[1.25]',
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
