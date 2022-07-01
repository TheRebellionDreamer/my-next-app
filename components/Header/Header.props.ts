import { ReactNode } from 'react';

export interface HeaderProps {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
