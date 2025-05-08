import React, { ComponentProps } from 'react';
import { cn } from '../../lib/utils';

type inputSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface InputProps extends ComponentProps<'input'> {
    _size: inputSizes
}

const sizeClasses: { [key: string]: string } = {
    xs: 'p-1.5',
    sm: 'p-2',
    md: 'p-2.5',
    lg: 'p-3'
};

export function Input({
    _size = 'md',
    className,
    ...props
}: InputProps) {
    return (
        <input
            className={cn(
                'border',
                'text-sm',
                'rounded-xl',
                'block',
                'bg-gray-50',
                'border-gray-300',
                'hover:border-blue-500',
                'focus:bg-gray-50',
                'focus:ring-blue-500',
                'focus:border-blue-500',
                'outline-blue-500',
                'disabled:bg-gray-100',
                'disabled:border-transparent',
                'disabled:resize-none',
                'disabled:overflow-hidden',
                'disabled:bg-gray-50',
                'disabled:text-gray-500',
                'disabled:border-gray-50',
                sizeClasses[_size],
                className
            )}
            {...props}
        />
    );
};