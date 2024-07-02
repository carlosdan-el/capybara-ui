import React, { ComponentProps, FC } from 'react';
import { Input } from '../../base';

export interface NumberInputProps extends ComponentProps<'input'> { }

const isOnlyNumbers = (value: string): boolean => {
    return /^[0-9]*(\,?|\.?)?[0-9]*?$/.test(value);
}

export const NumberInput: FC<NumberInputProps> = ({ onChange, ...rest }: NumberInputProps) => {
    const setAllowedValue = (element: React.ChangeEvent<HTMLInputElement>): void => {
        if (isOnlyNumbers(element.target.value.trim()) &&
            onChange) {
            onChange(element);
        }
    };

    return (
        <Input
            onChange={e => setAllowedValue(e)}
            {...rest}
        />
    );
};