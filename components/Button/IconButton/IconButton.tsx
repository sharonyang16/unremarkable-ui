import React from 'react';
import { cn } from '../../utils';
import { buttonVariants } from '../Button.variants';
import { Typography } from '../../Typography';
import { type IconButtonProps } from '../Button.types';
import { iconButtonSizeMap } from '../Button.utils';

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
        <Typography variant={iconButtonSizeMap[size ?? 'md']} color="inherit">
          <IconComponent />
        </Typography>
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
