import { VariantProps } from 'class-variance-authority';
import { typographyVariants } from './Typography.variants';

export type TypographyVariants = VariantProps<typeof typographyVariants>;

export type TypographyProps<T extends React.ElementType = 'p'> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
} & TypographyVariants &
  Omit<
    React.ComponentPropsWithoutRef<T>,
    keyof TypographyVariants | 'as' | 'className' | 'children'
  >;
