import React, { FC, HTMLAttributes, useMemo } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    type: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 
    'amber' | 'yellow' | 'lime' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' |
    'emerald' | 'teal' | 'cyan' | 'sky' | 'violet' | 'fuchsia' | 'rose'
    size: 'md' | 'lg'
    label: string
}

const typeClasses = {
    slate: 'bg-slate-50 text-slate-600',
    gray: 'bg-gray-50 text-gray-600',
    zinc: 'bg-zinc-50 text-zinc-600',
    neutral: 'bg-neutral-50 text-neutral-600',
    stone: 'bg-stone-50 text-stone-600',
    red: 'bg-red-50 text-red-600',
    orange: 'bg-orange-50 text-orange-600',
    amber: 'bg-amber-50 text-amber-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    lime: 'bg-lime-50 text-lime-600',
    green: 'bg-green-50 text-green-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    teal: 'bg-teal-50 text-teal-600',
    cyan: 'bg-cyan-50 text-cyan-600',
    sky: 'bg-sky-50 text-sky-600',
    blue: 'bg-blue-50 text-blue-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    violet: 'bg-violet-50 text-violet-600',
    purple: 'bg-purple-50 text-purple-600',
    fuchsia: 'bg-fuchsia-50 text-fuchsia-600',
    pink: 'bg-pink-50 text-pink-600',
    rose: 'bg-rose-50 text-rose-600'
};
const sizeClasses = {
    md: 'px-3 py-1',
    lg: 'px-3.5 py-1.5'
};

export const Badge: FC<BadgeProps> = ({
    type = 'blue',
    size = 'md',
    label = '',
    ...rest
}: BadgeProps) => {
    const classes = useMemo(() => {
        return [
            'text-xs font-medium rounded-lg capitalize',
            typeClasses[type],
            sizeClasses[size]
        ].join(' ');
    }, [type, size]);

    return (
        <span className={classes} {...rest}>
            {label}
        </span>
    );
};