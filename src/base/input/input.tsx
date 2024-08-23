import React, { ComponentProps, FC, useMemo } from 'react';

type inputSizes = 'sm' | 'md' | 'lg';

export interface InputProps extends ComponentProps<'input'> {
    _size: inputSizes
}

const sizeClasses = {
    'sm': 'p-2',
    'md': 'p-2.5',
    'lg': 'p-3'
};

export const Input: FC<InputProps> = ({ _size = 'md', ...props }) => {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'w-full',
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
            'outline-blue-500'
        ];

        values.push(sizeClasses[_size]);

        if (props.disabled || props.readOnly) {
            values.push('disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-50');
        }

        return values.join(' ');
    }, [props]);

    return (
        <div>
            <input
                {...props}
                className={classes}
            />
        </div>
    );
};