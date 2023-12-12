import React, { FC, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}

export const Button: FC<ButtonProps> = (
    {
        className = '',
        loading = false,
        disabled = false,
        children = '',
        onClick,
        ...rest
    }
) => {
    return (
        <button className={className} disabled={disabled} onClick={onClick} {...rest}>
            <React.Fragment>
                {children}
            </React.Fragment>
        </button>
    );
};