import React from 'react';
import { cn } from '../utils';
import { chipVariants } from './Chip.variants';
import { ChipProps } from './Chip.types';

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(chipVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
