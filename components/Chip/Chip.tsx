import React from 'react';
import { cn } from '../utils';
import { chipVariants } from './Chip.variants';
import { ChipProps } from './Chip.types';
import { Typography } from '..';
import { chipTypographyColorMap, chipTypographyVariantMap } from './Chip.utils';

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(chipVariants({ variant, size }), className)}
        {...props}
      >
        <Typography
          variant={chipTypographyVariantMap[size ?? 'md']}
          color={chipTypographyColorMap[variant ?? 'solid']}
        >
          {children}
        </Typography>
      </div>
    );
  }
);

Chip.displayName = 'Chip';
