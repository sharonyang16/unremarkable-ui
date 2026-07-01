import React, { useState } from 'react';
import { TextInputProps } from './TextInput.types';
import { Typography } from '..';
import { textInputVariants } from './TextInput.variants';
import { cn } from '../utils';

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, icon: IconComponent, className, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <Typography
            variant="label2"
            color={isFocus ? 'primary' : 'secondary'}
          >
            {label}
          </Typography>
        )}
        <div className={cn(textInputVariants({}), className)}>
          {IconComponent && (
            <IconComponent className={isFocus ? 'primary' : 'secondary'} />
          )}
          <input
            type="text"
            ref={ref}
            {...props}
            className="outline-none"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
        </div>
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
