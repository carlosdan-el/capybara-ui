import React, { FC, useMemo } from 'react';

export interface BadgeProps {
    type: 'success' | 'warning' | 'danger' | 'info'
    size: 'md' | 'lg',
    label: string
}

const typeClasses = {
    success: 'bg-green-50 text-green-600',
    warning: 'bg-yellow-50 text-yellow-600',
    danger: 'bg-red-50 text-red-600',
    info: 'bg-blue-50 text-blue-600',
};
const sizeClasses = {
    md: 'px-3 py-1',
    lg: 'px-3.5 py-1.5'
};

export const Badge: FC<BadgeProps> = ({
    type = 'info',
    size = 'md',
    label
}: BadgeProps) => {
    const classes = useMemo(() => {
        return [
            'text-xs font-medium rounded-lg capitalize',
            typeClasses[type],
            sizeClasses[size]
        ].join(' ');
    }, [type, size]);

    return (
        <span className={classes}>
            {label}
        </span>
    );
};