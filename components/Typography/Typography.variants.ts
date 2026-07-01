import { cva } from 'class-variance-authority';
import { textSizes, textColors } from '../baseStyles';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: textSizes.h1,
      h2: textSizes.h2,
      h3: textSizes.h3,
      h4: textSizes.h4,
      h5: textSizes.h5,
      h6: textSizes.h6,
      label1: textSizes.label1,
      label2: textSizes.label2,
      body1: textSizes.body1,
      body2: textSizes.body2,
    },
    color: {
      primary: textColors.primary,
      secondary: textColors.secondary,
      inverse: textColors.inverse,
      inherit: textColors.inherit,
    },
  },
  defaultVariants: {
    variant: 'body1',
    color: 'primary',
  },
});
