import React, { ComponentProps } from 'react';
import { cn } from '../../lib/utils';

export interface LabelProps extends ComponentProps<'label'> { }

export function Label({ className, ...props }: LabelProps) {
    return (
        <label
            className={cn(
                'block',
                'text-sm',
                'font-medium',
                className
            )}
            {...props}
        >
            {props.children}
        </label>
    );
};