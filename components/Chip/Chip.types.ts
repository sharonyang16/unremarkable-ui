import { VariantProps } from 'class-variance-authority';
import { chipVariants } from './Chip.variants';

export type ChipVariants = VariantProps<typeof chipVariants>;

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>, ChipVariants {}
