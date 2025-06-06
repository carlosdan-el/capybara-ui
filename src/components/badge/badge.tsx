import React, { FC, HTMLAttributes, useMemo } from 'react';
import Colors from '../../utils/colors';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    type: Colors
    size: 'xs' | 'sm' | 'md' | 'lg'
    label: string
    badgeStyle: 'dotted' | 'normal'
}

const typeClasses = {
    normal: {
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
    },
    dotted: {
        slate: 'text-slate-600',
        gray: 'text-gray-600',
        zinc: 'text-zinc-600',
        neutral: 'text-neutral-600',
        stone: 'text-stone-600',
        red: 'text-red-600',
        orange: 'text-orange-600',
        amber: 'text-amber-600',
        yellow: 'text-yellow-600',
        lime: 'text-lime-600',
        green: 'text-green-600',
        emerald: 'text-emerald-600',
        teal: 'text-teal-600',
        cyan: 'text-cyan-600',
        sky: 'text-sky-600',
        blue: 'text-blue-600',
        indigo: 'text-indigo-600',
        violet: 'text-violet-600',
        purple: 'text-purple-600',
        fuchsia: 'text-fuchsia-600',
        pink: 'text-pink-600',
        rose: 'text-rose-600'
    }
};
const dotStyles = {
    slate: 'bg-slate-600',
    gray: 'bg-gray-600',
    zinc: 'bg-zinc-600',
    neutral: 'bg-neutral-600',
    stone: 'bg-stone-600',
    red: 'bg-red-600',
    orange: 'bg-orange-600',
    amber: 'bg-amber-600',
    yellow: 'bg-yellow-600',
    lime: 'bg-lime-600',
    green: 'bg-green-600',
    emerald: 'bg-emerald-600',
    teal: 'bg-teal-600',
    cyan: 'bg-cyan-600',
    sky: 'bg-sky-600',
    blue: 'bg-blue-600',
    indigo: 'bg-indigo-600',
    violet: 'bg-violet-600',
    purple: 'bg-purple-600',
    fuchsia: 'bg-fuchsia-600',
    pink: 'bg-pink-600',
    rose: 'bg-rose-600'
};
const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-0.5 text-sm',
    md: 'px-3 py-1 text-base',
    lg: 'px-3.5 py-1.5 text-lg'
};

export const Badge: FC<BadgeProps> = ({
    badgeStyle = 'normal',
    type = 'blue',
    size = 'md',
    label = '',
    ...rest
}: BadgeProps) => {
    const badgeClasses = useMemo(() => {
        return [
            'font-medium rounded-lg capitalize flex items-center max-w-min',
            typeClasses[badgeStyle][type],
            sizeClasses[size]
        ].join(' ');
    }, [type, size, badgeStyle]);
    const dotClasses = useMemo(() => {
        return [
            'w-2 h-2 rounded-full mr-2',
            dotStyles[type]
        ].join(' ');
    }, [type]);

    return (
        <div className={`${badgeClasses}`} {...rest}>
            {badgeStyle === 'dotted' &&
                <div className={dotClasses}></div>
            }
            {label}
        </div>
    );
};