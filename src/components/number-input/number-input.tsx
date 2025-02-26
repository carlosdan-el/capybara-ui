import React from 'react';
import { Input, InputProps } from '../../base';

const isOnlyNumbers = (value: string): boolean => {
    return /^[0-9]*(\,?|\.?)?[0-9]*?$/.test(value);
}

export function NumberInput({
    onChange,
    value,
    ...props
}: InputProps) {
    const setAllowedValue = (element: React.ChangeEvent<HTMLInputElement>): void => {
        if (isOnlyNumbers(element.target.value.trim()) &&
            onChange) {
            onChange(element);
        }
    };

    return (
        <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAllowedValue(e)}
            {...props}
        />
    );
}