import React, { ButtonHTMLAttributes, FC, useMemo } from 'react';

type ButtonTypes = 'text' | 'outlined' | 'contained';
type ButtonEmphasis = 'high' | 'medium' | 'low';
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonRounded = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    _type: ButtonTypes
    emphasis?: ButtonEmphasis
    size?: ButtonSizes
    rounded?: ButtonRounded
    label: string
    leadingIcon?: React.ReactNode,
    trailingIcon?: React.ReactNode,
    disabled?: boolean
    isLoading?: boolean
}

const onlyIconSizes = {
    xs: 'px-1 py-1 text-xs',
    sm: 'px-2 py-2 text-sm',
    md: 'px-2.5 py-2.5 text-sm',
    lg: 'px-3 py-3 text-base',
    xl: 'px-3.5 py-3.5 text-base'
};
const sizes = {
    xs: 'px-3 py-2 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base'
};

const getSizes = (size: ButtonSizes, hasOnlyIcon: boolean) => {
    if (hasOnlyIcon) return onlyIconSizes[size];
    return sizes[size];
};

const radius = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
};

export const Button: FC<ButtonProps> = (
    {
        _type = 'contained',
        emphasis = 'high',
        label = '',
        size = 'md',
        className = '',
        rounded = 'lg',
        disabled = false,
        leadingIcon,
        trailingIcon,
        onClick,
        ...rest
    }
) => {
    const classes = useMemo(() => {
        const values = ['flex items-center flex-nowrap whitespace-nowrap focus:outline-none focus:ring-4 font-medium capitalize'];

        if (className.length > 0) {
            values.push(getSizes(size, (label.length === 0)));
            values.push(radius[rounded]);
            values.push(className);
            return values.join(' ');
        }
        if (_type === 'contained' && emphasis === 'high') {
            values.push('text-white bg-green-600 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800');
        }
        if (_type === 'contained' && emphasis === 'medium') {
            values.push('text-gray-600 bg-green-100 hover:bg-green-200 focus:ring-green-300 dark:bg-green-300 dark:hover:bg-green-300 dark:focus:ring-green-400');
        }
        if (_type === 'contained' && emphasis === 'low') {
            values.push('text-gray-600 bg-transparent hover:bg-green-200 focus:ring-green-300 dark:bg-green-300 dark:hover:bg-green-300 dark:focus:ring-green-400');
        }
        if (_type === 'outlined') {
            values.push('text-green-600 hover:text-green-700 border border-gray-200 focus:ring-green-300');
        }
        if (_type === 'text') {
            values.push('text-green-600 hover:text-green-700 border border-transparent focus:border-gray-200 focus:ring-green-300');
        }

        values.push(getSizes(size, (label.length === 0)));
        values.push(radius[rounded]);

        if (disabled) values.push('opacity-50');

        return values.join(' ');
    }, [className, _type, size, label, rounded, emphasis, disabled]);
    const LeadingIconContainer = () => <div className={`${label.length > 0 ? 'mr-2' : null}`}>{leadingIcon}</div>;
    const TrailingIconContainer = () => <div className={`${label.length > 0 ? 'ml-2' : null}`}>{trailingIcon}</div>;

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            <React.Fragment>
                {leadingIcon && <LeadingIconContainer />}
                {label}
                {trailingIcon && <TrailingIconContainer />}
            </React.Fragment>
        </button>
    );
};