import { VariantProps } from 'class-variance-authority';
import { linkVariants } from './Link.variants';

export type LinkVariants = VariantProps<typeof linkVariants>;

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LinkVariants {
  as?: React.ElementType;
}
