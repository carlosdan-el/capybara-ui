import React, { FC, useMemo } from 'react';
import { Input, InputProps } from '../../base';

export interface TextFieldProps extends InputProps {
    leadingIcon: any
    leadingIconStyles: string
}

export const TextField: FC<TextFieldProps> = (props) => {
    const leadingIconStyles = useMemo(() => {
        if (props.leadingIconStyles) return props.leadingIconStyles;

        const defaultStyles = [
            'w-full',
            'flex',
            'justify-center',
            'items-center'
        ];

        return defaultStyles.join(' ');
    }, [props]);
    return (
        <div className={leadingIconStyles}>
            {props.leadingIcon && props.leadingIcon}
            <Input {...props} />
        </div>
    );
};