import { forwardRef, ElementType, ComponentPropsWithoutRef } from 'react';
import './styles/button.css';

type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSizes = 'small' | 'medium' | 'large';

interface ButtonProps<T extends ElementType = 'button'> {
  as?: T; // Allows polymorphic behavior
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
}

const Button = forwardRef<HTMLElement, ButtonProps & ComponentPropsWithoutRef<any>>(
  (
    { as: Component = 'button', variant = 'primary', size = 'medium', className = '', ...props },
    ref,
  ) => {
    return <Component ref={ref} className={`button ${variant} ${size} ${className}`} {...props} />;
  },
);

Button.displayName = 'Button';

export default Button;
