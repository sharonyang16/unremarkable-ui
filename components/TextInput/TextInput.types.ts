import { VariantProps } from 'class-variance-authority';
import { textInputVariants } from './TextInput.variants';

export type TextInputVariants = VariantProps<typeof textInputVariants>;

export interface TextInputProps
  extends React.HTMLAttributes<HTMLInputElement>, TextInputVariants {
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
}
