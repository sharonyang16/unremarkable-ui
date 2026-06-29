import { type TypographyVariants } from '../Typography';
import { type ChipVariants } from './Chip.types';

export const chipTypographyVariantMap: Record<
  NonNullable<ChipVariants['size']>,
  TypographyVariants['variant']
> = {
  sm: 'body2',
  md: 'body2',
  lg: 'body1',
};

export const chipTypographyColorMap: Record<
  NonNullable<ChipVariants['variant']>,
  TypographyVariants['color']
> = {
  solid: 'inverse',
  subtle: 'primary',
  outline: 'primary',
};
