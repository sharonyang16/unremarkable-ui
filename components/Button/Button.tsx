import React from 'react';
import { cn } from '../utils';
import { buttonVariants } from './Button.variants';
import { type ButtonProps } from './Button.types';

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
        <div className="flex gap-2 items-center">{children}</div>
      </button>
    );
  }
);

Button.displayName = 'Button';
