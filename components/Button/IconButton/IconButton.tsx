import React from 'react';
import { cn } from '../../utils';
import { buttonVariants } from '../Button.variants';
import { type IconButtonProps } from '../Button.types';

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant,
      size = 'md',
      icon: IconComponent,
      className,
      ...props
    }: IconButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, kind: 'icon' }),
          className
        )}
        {...props}
      >
        <IconComponent />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
