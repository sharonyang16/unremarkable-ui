import React from 'react';
import { cn } from '../utils';
import { linkVariants } from './Link.variants';
import { LinkProps } from './Link.types';

export const Link = React.forwardRef<HTMLElement, LinkProps>(
  ({ variant, className, as: Comp = 'a', children, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(linkVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Link.displayName = 'Link';
