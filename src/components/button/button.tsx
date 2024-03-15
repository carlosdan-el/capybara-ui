import React, { ButtonHTMLAttributes, FC, useMemo } from 'react';

type ButtonColors = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' |
    'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' |
    'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
type ButtonEmphasis = 'high' | 'medium' | 'low' | 'none';
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonRounded = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    colors: ButtonColors,
    emphasis?: ButtonEmphasis
    size?: ButtonSizes
    rounded?: ButtonRounded
    label?: string
    leadingIcon?: React.ReactNode,
    trailingIcon?: React.ReactNode,
    disabled?: boolean
    isLoading?: boolean
}

const buttonColorStyles: any = {
    high: {
        slate: 'text-white bg-slate-600 hover:bg-slate-700 border-slate-200 focus:ring-slate-300',
        gray: 'text-white bg-gray-600 hover:bg-gray-700 border-gray-200 focus:ring-gray-300',
        zinc: 'text-white bg-zinc-600 hover:bg-zinc-700 border-zinc-200 focus:ring-zinc-300',
        neutral: 'text-white bg-neutral-600 hover:bg-neutral-700 border-neutral-200 focus:ring-neutral-300',
        stone: 'text-white bg-stone-600 hover:bg-stone-700 border-stone-200 focus:ring-stone-300',
        red: 'text-white bg-red-600 hover:bg-red-700 border-red-200 focus:ring-red-300',
        orange: 'text-white bg-orange-600 hover:bg-orange-700 border-orange-200 focus:ring-orange-300',
        amber: 'text-white bg-amber-600 hover:bg-amber-700 border-amber-200 focus:ring-amber-300',
        yellow: 'text-white bg-yellow-600 hover:bg-yellow-700 border-yellow-200 focus:ring-yellow-300',
        lime: 'text-white bg-lime-600 hover:bg-lime-700 border-lime-200 focus:ring-lime-300',
        green: 'text-white bg-green-600 hover:bg-green-700 border-green-200 focus:ring-green-300',
        emerald: 'text-white bg-emerald-600 hover:bg-emerald-700 border-emerald-200 focus:ring-emerald-300',
        teal: 'text-white bg-teal-600 hover:bg-teal-700 border-teal-200 focus:ring-teal-300',
        cyan: 'text-white bg-cyan-600 hover:bg-cyan-700 border-cyan-200 focus:ring-cyan-300',
        sky: 'text-white bg-sky-600 hover:bg-sky-700 border-sky-200 focus:ring-sky-300',
        blue: 'text-white bg-blue-600 hover:bg-blue-700 border-blue-200 focus:ring-blue-300',
        indigo: 'text-white bg-indigo-600 hover:bg-indigo-700 border-indigo-200 focus:ring-indigo-300',
        violet: 'text-white bg-violet-600 hover:bg-violet-700 border-violet-200 focus:ring-violet-300',
        purple: 'text-white bg-purple-600 hover:bg-purple-700 border-purple-200 focus:ring-purple-300',
        fuchsia: 'text-white bg-fuchsia-600 hover:bg-fuchsia-700 border-fuchsia-200 focus:ring-fuchsia-300',
        pink: 'text-white bg-pink-600 hover:bg-pink-700 border-pink-200 focus:ring-pink-300',
        rose: 'text-white bg-rose-600 hover:bg-rose-700 border-rose-200 focus:ring-rose-300'
    },
    medium: {
        slate: 'text-white bg-slate-400 hover:bg-slate-500 border-slate-200 focus:ring-slate-300',
        gray: 'text-white bg-gray-400 hover:bg-gray-500 border-gray-200 focus:ring-gray-300',
        zinc: 'text-white bg-zinc-400 hover:bg-zinc-500 border-zinc-200 focus:ring-zinc-300',
        neutral: 'text-white bg-neutral-400 hover:bg-neutral-500 border-neutral-200 focus:ring-neutral-300',
        stone: 'text-white bg-stone-400 hover:bg-stone-500 border-stone-200 focus:ring-stone-300',
        red: 'text-white bg-red-400 hover:bg-red-500 border-red-200 focus:ring-red-300',
        orange: 'text-white bg-orange-400 hover:bg-orange-500 border-orange-200 focus:ring-orange-300',
        amber: 'text-white bg-amber-400 hover:bg-amber-500 border-amber-200 focus:ring-amber-300',
        yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 border-yellow-200 focus:ring-yellow-300',
        lime: 'text-white bg-lime-400 hover:bg-lime-500 border-lime-200 focus:ring-lime-300',
        green: 'text-white bg-green-400 hover:bg-green-500 border-green-200 focus:ring-green-300',
        emerald: 'text-white bg-emerald-400 hover:bg-emerald-500 border-emerald-200 focus:ring-emerald-300',
        teal: 'text-white bg-teal-400 hover:bg-teal-500 border-teal-200 focus:ring-teal-300',
        cyan: 'text-white bg-cyan-400 hover:bg-cyan-500 border-cyan-200 focus:ring-cyan-300',
        sky: 'text-white bg-sky-400 hover:bg-sky-500 border-sky-200 focus:ring-sky-300',
        blue: 'text-white bg-blue-400 hover:bg-blue-500 border-blue-200 focus:ring-blue-300',
        indigo: 'text-white bg-indigo-400 hover:bg-indigo-500 border-indigo-200 focus:ring-indigo-300',
        violet: 'text-white bg-violet-400 hover:bg-violet-500 border-violet-200 focus:ring-violet-300',
        purple: 'text-white bg-purple-400 hover:bg-purple-500 border-purple-200 focus:ring-purple-300',
        fuchsia: 'text-white bg-fuchsia-400 hover:bg-fuchsia-500 border-fuchsia-200 focus:ring-fuchsia-300',
        pink: 'text-white bg-pink-400 hover:bg-pink-500 border-pink-200 focus:ring-pink-300',
        rose: 'text-white bg-rose-400 hover:bg-rose-500 border-rose-200 focus:ring-rose-300'
    },
    low: {
        slate: 'text-slate-600 bg-slate-200 hover:text-white hover:bg-slate-700 border-slate-200 focus:ring-slate-300',
        gray: 'text-gray-600 bg-gray-200 hover:text-white hover:bg-gray-700 border-gray-200 focus:ring-gray-300',
        zinc: 'text-zinc-600 bg-zinc-200 hover:text-white hover:bg-zinc-700 border-zinc-200 focus:ring-zinc-300',
        neutral: 'text-neutral-600 bg-neutral-200 hover:text-white hover:bg-neutral-700 border-neutral-200 focus:ring-neutral-300',
        stone: 'text-stone-600 bg-stone-200 hover:text-white hover:bg-stone-700 border-stone-200 focus:ring-stone-300',
        red: 'text-red-600 bg-red-200 hover:text-white hover:bg-red-700 border-red-200 focus:ring-red-300',
        orange: 'text-orange-600 bg-orange-200 hover:text-white hover:bg-orange-700 border-orange-200 focus:ring-orange-300',
        amber: 'text-amber-600 bg-amber-200 hover:text-white hover:bg-amber-700 border-amber-200 focus:ring-amber-300',
        yellow: 'text-yellow-600 bg-yellow-200 hover:text-white hover:bg-yellow-700 border-yellow-200 focus:ring-yellow-300',
        lime: 'text-lime-600 bg-lime-200 hover:text-white hover:bg-lime-700 border-lime-200 focus:ring-lime-300',
        green: 'text-green-600 bg-green-200 hover:text-white hover:bg-green-700 border-green-200 focus:ring-green-300',
        emerald: 'text-emerald-600 bg-emerald-200 hover:text-white hover:bg-emerald-700 border-emerald-200 focus:ring-emerald-300',
        teal: 'text-teal-600 bg-teal-200 hover:text-white hover:bg-teal-700 border-teal-200 focus:ring-teal-300',
        cyan: 'text-cyan-600 bg-cyan-200 hover:text-white hover:bg-cyan-700 border-cyan-200 focus:ring-cyan-300',
        sky: 'text-sky-600 bg-sky-200 hover:text-white hover:bg-sky-700 border-sky-200 focus:ring-sky-300',
        blue: 'text-blue-600 bg-blue-200 hover:text-white hover:bg-blue-700 border-blue-200 focus:ring-blue-300',
        indigo: 'text-indigo-600 bg-indigo-200 hover:text-white hover:bg-indigo-700 border-indigo-200 focus:ring-indigo-300',
        violet: 'text-violet-600 bg-violet-200 hover:text-white hover:bg-violet-700 border-violet-200 focus:ring-violet-300',
        purple: 'text-purple-600 bg-purple-200 hover:text-white hover:bg-purple-700 border-purple-200 focus:ring-purple-300',
        fuchsia: 'text-fuchsia-600 bg-fuchsia-200 hover:text-white hover:bg-fuchsia-700 border-fuchsia-200 focus:ring-fuchsia-300',
        pink: 'text-pink-600 bg-pink-200 hover:text-white hover:bg-pink-700 border-pink-200 focus:ring-pink-300',
        rose: 'text-rose-600 bg-rose-200 hover:text-white hover:bg-rose-700 border-rose-200 focus:ring-rose-300'
    },
    none: {
        slate: 'text-slate-600 hover:text-slate-700 focus:border-slate-200 focus:ring-slate-300',
        gray: 'text-gray-600 hover:text-gray-700 focus:border-gray-200 focus:ring-gray-300',
        zinc: 'text-zinc-600 hover:text-zinc-700 focus:border-zinc-200 focus:ring-zinc-300',
        neutral: 'text-neutral-600 hover:text-neutral-700 focus:border-neutral-200 focus:ring-neutral-300',
        stone: 'text-stone-600 hover:text-stone-700 focus:border-stone-200 focus:ring-stone-300',
        red: 'text-red-600 hover:text-red-700 focus:border-red-200 focus:ring-red-300',
        orange: 'text-orange-600 hover:text-orange-700 focus:border-orange-200 focus:ring-orange-300',
        amber: 'text-amber-600 hover:text-amber-700 focus:border-amber-200 focus:ring-amber-300',
        yellow: 'text-yellow-600 hover:text-yellow-700 focus:border-yellow-200 focus:ring-yellow-300',
        lime: 'text-lime-600 hover:text-lime-700 focus:border-lime-200 focus:ring-lime-300',
        green: 'text-green-600 hover:text-green-700 focus:border-green-200 focus:ring-green-300',
        emerald: 'text-emerald-600 hover:text-emerald-700 focus:border-emerald-200 focus:ring-emerald-300',
        teal: 'text-teal-600 hover:text-teal-700 focus:border-teal-200 focus:ring-teal-300',
        cyan: 'text-cyan-600 hover:text-cyan-700 focus:border-cyan-200 focus:ring-cyan-300',
        sky: 'text-sky-600 hover:text-sky-700 focus:border-sky-200 focus:ring-sky-300',
        blue: 'text-blue-600 hover:text-blue-700 focus:border-blue-200 focus:ring-blue-300',
        indigo: 'text-indigo-600 hover:text-indigo-700 focus:border-indigo-200 focus:ring-indigo-300',
        violet: 'text-violet-600 hover:text-violet-700 focus:border-violet-200 focus:ring-violet-300',
        purple: 'text-purple-600 hover:text-purple-700 focus:border-purple-200 focus:ring-purple-300',
        fuchsia: 'text-fuchsia-600 hover:text-fuchsia-700 focus:border-fuchsia-200 focus:ring-fuchsia-300',
        pink: 'text-pink-600 hover:text-pink-700 focus:border-pink-200 focus:ring-pink-300',
        rose: 'text-rose-600 hover:text-rose-700 focus:border-rose-200 focus:ring-rose-300'
    }
};
const onlyIconSizes: any = {
    xs: 'px-1 py-1 text-xs',
    sm: 'px-2 py-2 text-sm',
    md: 'px-2.5 py-2.5 text-sm',
    lg: 'px-3 py-3 text-base',
    xl: 'px-3.5 py-3.5 text-base'
};
const sizes: any = {
    xs: 'px-3 py-2 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base'
};
const radius = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
};

const getSizes = (size: ButtonSizes, hasOnlyIcon: boolean) => {
    if (hasOnlyIcon) return onlyIconSizes[size];
    return sizes[size];
};

export const Button: FC<ButtonProps> = (
    {
        color = 'green',
        className,
        emphasis = 'high',
        label = '',
        size = 'md',
        rounded = 'lg',
        leadingIcon,
        trailingIcon,
        onClick,
        disabled = false,
        type = 'button',
        ...rest
    }
) => {
    const classes = useMemo(() => {
        if (className) return className;

        const values = ['flex items-center flex-nowrap whitespace-nowrap focus:outline-none focus:ring-4 font-medium capitalize transition-colors'];

        if (disabled) values.push('opacity-50');

        values.push(getSizes(size, (label.length === 0)));
        values.push(radius[rounded]);
        var colorStyles = buttonColorStyles[emphasis][color];
        values.push(colorStyles);

        return values.join(' ');
    }, [className, size, label, rounded, emphasis, disabled, color]);
    const LeadingIconContainer = () => <div className={`${label.length > 0 ? 'mr-2' : null}`}>{leadingIcon}</div>;
    const TrailingIconContainer = () => <div className={`${label.length > 0 ? 'ml-2' : null}`}>{trailingIcon}</div>;

    return (
        <button
            type={type}
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