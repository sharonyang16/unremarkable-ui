import { cva } from 'class-variance-authority';
import { backgroundColors, textSizes, textColors } from '../baseStyles';

export const buttonVariants = cva('cursor-pointer rounded-sm', {
  variants: {
    variant: {
      solid: `${textColors.inverse} transition-colors ${backgroundColors.primaryAction} ${backgroundColors.primaryActionHover} ${backgroundColors.primaryActionFocus} ${backgroundColors.primaryActionActive}`,
      outline: `${textColors.primary} transition-colors border-1 border-black dark:border-white ${backgroundColors.secondaryActionHover} ${backgroundColors.secondaryActionFocus} ${backgroundColors.secondaryActionActive}`,
      ghost: `${textColors.primary} transition-colors ${backgroundColors.secondaryActionHover} ${backgroundColors.secondaryActionFocus} ${backgroundColors.secondaryActionActive}`,
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
