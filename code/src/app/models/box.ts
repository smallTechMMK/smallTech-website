
import { ReactNode } from "react";
export interface BoxProps {
image: string;       // Icon or image source
  title: string;
  subtitle: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;     // allow custom width, padding, margin etc.
  children?: ReactNode;
}