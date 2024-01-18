import React, { HTMLAttributes, useMemo } from 'react';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    id?: string | undefined
    rounded?: boolean
    disabled?: boolean
    hidden?: boolean
};

export const Checkbox = ({
    id = undefined,
    rounded = false,
    disabled = false,
    hidden = false,
    ...rest
}: CheckboxProps) => {
    const classes = useMemo(() => {
        const values = ['w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'];
        values.push(rounded ? 'rounded-full' : 'rounded');
        values.push(disabled ? 'opacity-50' : '');
        values.push(hidden ? 'hidden' : '')
        return values.join(' ');
    }, [rounded, disabled, hidden]);

    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                className={classes}
                disabled={disabled}
                {...rest}
            />
            <label htmlFor={id} className={`ms-2 text-sm font-medium ${hidden ? 'hidden' : ''} ${disabled ? 'opacity-50' : ''}`}>
                Default checkbox
            </label>
        </div>
    );
};