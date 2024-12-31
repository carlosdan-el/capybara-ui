import React, { ComponentProps } from 'react';
import { cn } from '../../lib/utils';

export interface SelectProps extends ComponentProps<'select'> { }

export function Select({ className, ...props }: SelectProps) {
    return (
        <select
            className={cn(
                'w-full',
                'border',
                'text-sm',
                'rounded-xl',
                'block',
                'p-2.5',
                'bg-gray-50',
                'border-gray-300',
                'hover:border-blue-500',
                'focus:bg-gray-50',
                'focus:ring-blue-500',
                'focus:border-blue-500',
                'outline-blue-500',
                'disabled:bg-gray-50',
                'disabled:text-gray-500',
                'disabled:border-gray-50',
                className
            )}
            {...props}
        >
            {props.children}
        </select>
    );
};