
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'subtle';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = 'default', size = 'default', children, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant === 'subtle' ? 'ghost' : variant}
        size={size}
        className={cn(
          'rounded-full font-medium transition-all duration-300 ease-in-out',
          variant === 'default' && 'bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg',
          variant === 'subtle' && 'bg-accent text-primary hover:bg-accent/80 hover:text-primary/90',
          variant === 'outline' && 'border-2 hover:bg-accent/20',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
