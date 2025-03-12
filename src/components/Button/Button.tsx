import { forwardRef, ElementType, ComponentPropsWithoutRef } from 'react';
import './styles/button.css';

type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSizes = 'none' | 'small' | 'medium' | 'large';

interface ButtonProps<T extends ElementType = 'button'> {
  as?: T; // Allows polymorphic behavior
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  hasGlowyShadow?: boolean;
}

const Button = forwardRef<HTMLElement, ButtonProps & ComponentPropsWithoutRef<any>>(
  (
    {
      as: Component = 'button',
      variant = 'primary',
      size = 'none',
      className = '',
      hasGlowyShadow = true,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`button ${variant} ${size} ${className} ${
          hasGlowyShadow ? 'has-glowy-shadow' : ''
        }`}
        {...props}
      ></Component>
    );
  },
);

Button.displayName = 'Button';

export default Button;
