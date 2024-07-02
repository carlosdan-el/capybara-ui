import React, { ComponentProps, useMemo } from 'react';

export interface InputProps extends ComponentProps<'input'> { }

export default function Input(props: InputProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const defaultClasses = [
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
            'outline-blue-500'
        ];

        if (props.disabled || props.readOnly) {
            defaultClasses.push('disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-50');
        }

        return defaultClasses.join(' ');
    }, [props]);

    return (
        <input
            {...props}
            className={classes}
        />
    );
}