import { cva } from 'class-variance-authority';
import { backgroundColors, textSizes, textColors } from '../baseStyles';

export const chipVariants = cva('inline-flex items-center rounded-full w-fit', {
  variants: {
    variant: {
      solid: `${textColors.inverse} ${backgroundColors.primaryAction}`,
      subtle: `${textColors.primary} ${backgroundColors.secondaryAction}`,
      outline: `${textColors.primary} border-1 border-black dark:border-white`,
    },
    size: {
      sm: `py-0.5 px-2 ${textSizes.body2}`,
      md: `py-1 px-2.5 ${textSizes.body2}`,
      lg: `py-1.5 px-3 ${textSizes.body1}`,
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
