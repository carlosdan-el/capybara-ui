import React, { ComponentProps, FC, useMemo } from 'react';

export interface SelectProps extends ComponentProps<'select'> { }

export const Select: FC<SelectProps> = (props) => {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const defaultValues = [
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

        if (props.disabled) {
            defaultValues.push('disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-50');
        }

        return defaultValues.join(' ');
    }, [props]);

    return (
        <select {...props} className={classes}>
            {props.children}
        </select>
    );
};