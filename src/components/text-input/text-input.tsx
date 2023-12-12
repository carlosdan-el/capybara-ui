import React, { FC, InputHTMLAttributes, useMemo } from 'react';

type TextInputTypes = 'text' | 'email';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: TextInputTypes
    _size: 'sm' | 'md' | 'lg'
}

export const TextInput: FC<TextInputProps> = ({
    type = 'text',
    placeholder = '',
    disabled = false,
    onChange,
    value,
    _size = 'md',
    ...rest
}) => {
    const sizeClasses = useMemo(() => {
        const classes = {
            sm: 'p-2 sm:text-xs',
            md: 'p-2.5 text-sm',
            lg: 'p-4 sm:Text-md'
        };
        return classes[_size];
    }, [_size]);

    return (
        <input
            className={`block text-gray-900 ${sizeClasses} border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-green-500 focus:border-green-500`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...rest}
        />
    );
};