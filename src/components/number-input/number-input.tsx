import React, { FC } from 'react';
import { Input, InputProps } from '../../base';

const isOnlyNumbers = (value: string): boolean => {
    return /^[0-9]*(\,?|\.?)?[0-9]*?$/.test(value);
}

export const NumberInput: FC<InputProps> = ({ onChange, ...rest }) => {
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