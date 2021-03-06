import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant?: 'small' | 'standard' | 'large';
}
