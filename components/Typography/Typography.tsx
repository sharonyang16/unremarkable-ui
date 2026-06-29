import React from 'react';
import { cn } from '../utils';
import { typographyVariants } from './Typography.variants';
import { TypographyProps } from './Typography.types';

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, color, className, as, ...props }, ref) => {
    const Component = as || 'p';

    const componentProps = {
      className: cn(typographyVariants({ variant, color }), className),
      ...props,
      ref,
    };

    return React.createElement(Component, componentProps);
  }
);

Typography.displayName = 'Typography';
