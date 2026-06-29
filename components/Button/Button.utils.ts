import { ButtonVariants } from './Button.types';
import { TypographyVariants } from '../Typography';

export const buttonSizeMap: Record<
  NonNullable<ButtonVariants['size']>,
  TypographyVariants['variant']
> = {
  sm: 'label2',
  md: 'label1',
  lg: 'h6',
};

export const iconButtonSizeMap: Record<
  NonNullable<ButtonVariants['size']>,
  TypographyVariants['variant']
> = {
  sm: 'label2',
  md: 'h5',
  lg: 'h4',
};
