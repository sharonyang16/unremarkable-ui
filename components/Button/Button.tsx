import React from 'react';
import { cn } from '../utils';
import { buttonVariants } from './Button.variants';
import { Typography } from '../Typography';
import { type ButtonProps } from './Button.types';
import { buttonSizeMap } from './Button.utils';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size = 'md', className, children, ...props }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, kind: 'button' }),
          className
        )}
        {...props}
      >
        <Typography variant={buttonSizeMap[size ?? 'md']} color="inherit">
          <div className="flex gap-2 items-center">{children}</div>
        </Typography>
      </button>
    );
  }
);

Button.displayName = 'Button';
