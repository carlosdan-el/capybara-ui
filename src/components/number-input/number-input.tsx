import React, { ChangeEvent, ComponentProps, FC, useMemo, useState } from 'react';

export interface NumberInputProps extends ComponentProps<'input'> { }

const isOnlyNumbers = (value: string): boolean => {
    return /^[0-9]*(\,?|\.?)?[0-9]*?$/.test(value);
}

export const NumberInput: FC<NumberInputProps> = ({ onChange, ...rest }: NumberInputProps) => {
    const classes = useMemo(() => {
        if (rest.className) return rest.className;

        const defaultClasses = [
            'w-full',
            'border',
            'text-sm',
            'rounded-xl',
            'block',
            'p-2.5',
            'bg-gray-50',
            'border-blue-300',
            'hover:border-blue-500',
            'focus:bg-gray-50',
            'focus:ring-blue-500',
            'focus:border-blue-500',
            'outline-blue-500'
        ];

        if (rest.disabled || rest.readOnly) {
            defaultClasses.push('disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-50');
        }

        return defaultClasses.join(' ');
    }, [rest]);
    const setAllowedValue = (element: React.ChangeEvent<HTMLInputElement>): void => {
        if (isOnlyNumbers(element.target.value.trim()) &&
            onChange) {
            onChange(element);
        }
    };

    return (
        <input
            className={classes}
            onChange={e => setAllowedValue(e)}
            {...rest}
        />
    );
};