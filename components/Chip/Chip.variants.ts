import { cva } from 'class-variance-authority';
import {
  backgroundColors,
  borderColors,
  borderWidths,
  textColors,
  textSizes,
} from '../baseStyles';

export const chipVariants = cva('inline-flex items-center rounded-full w-fit', {
  variants: {
    variant: {
      solid: `${textColors.inverse} ${backgroundColors.primaryAction}`,
      subtle: `${textColors.primary} ${backgroundColors.secondaryAction}`,
      outline: `${textColors.primary} ${borderWidths[1]} ${borderColors.primary}`,
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
