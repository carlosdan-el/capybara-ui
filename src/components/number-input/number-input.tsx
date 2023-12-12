import React, { ChangeEvent, FC, InputHTMLAttributes, useMemo } from 'react';

export interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    _size: 'sm' | 'md' | 'lg'
}

const isOnlyNumbers = (value: string): boolean => {
    if (/^(-)?(\d)*(,)?([0-9]{1})?([0-9]{1})?$/.test(value)) return true;
    return false;
}

export const NumberInput: FC<NumberInputProps> = ({
    placeholder = '',
    disabled = false,
    value,
    onChange,
    _size = 'md',
    ...props
}) => {
    const sizeClasses = useMemo(() => {
        const classes = {
            sm: 'p-2 sm:text-xs',
            md: 'p-2.5 text-sm',
            lg: 'p-4 sm:Text-md'
        };
        return classes[_size];
    }, [_size]);
    const setAllowedValue = (element: ChangeEvent<HTMLInputElement>): void => {
        if (isOnlyNumbers(element.target.value) && onChange) onChange(element);
    };

    return (
        <input
            className={`block text-gray-900 ${sizeClasses} border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-green-500 focus:border-green-500`}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={setAllowedValue}
            disabled={disabled}
            {...props}
        />
    );
};