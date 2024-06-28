import React, { ChangeEvent, ComponentProps, FC, useMemo } from 'react';

export interface NumberInputProps extends ComponentProps<'input'> { }

const isOnlyNumbers = (value: string): boolean => {
    return /^(-)?(\d)*(,?|.?)?([0-9]{1})?([0-9]{1})?$/.test(value);
}

export const NumberInput: FC<NumberInputProps> = (props: NumberInputProps) => {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const defaultClasses = [
            'w-full',
            'border',
            'text-sm',
            'rounded-xl',
            'block',
            'p-2.5',
            'bg-gray-50',
            'border-gray-300',
            'hover:bg-green-100',
            'hover:border-green-500',
            'focus:bg-gray-50',
            'focus:ring-green-500',
            'focus:border-green-500',
            'outline-green-500'
        ];

        if (props.disabled || props.readOnly) {
            defaultClasses.push('disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-50');
        }

        return defaultClasses.join(' ');
    }, [props]);
    const setAllowedValue = (element: ChangeEvent<HTMLInputElement>): void => {
        if (isOnlyNumbers(element.target.value) && props.onChange) {
            props.onChange(element);
        }
    };

    return (
        <input
            className={classes}
            onChange={setAllowedValue}
            {...props}
        />
    );
};