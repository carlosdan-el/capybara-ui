import React, { ComponentProps, FC, useMemo } from "react";

export interface HeadingProps extends ComponentProps<'h1'> {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const defaultClasses = {
    h1: 'text-4xl font-medium text-zinc-900 dark:text-white',
    h2: 'text-3xl font-medium text-zinc-900 dark:text-white',
    h3: 'text-2xl font-medium text-zinc-900 dark:text-white',
    h4: 'text-xl font-medium text-zinc-900 dark:text-white',
    h5: 'text-lg font-medium text-zinc-900 dark:text-white',
    h6: 'text-base font-medium text-zinc-900 dark:text-white'
};

export const Heading: FC<HeadingProps> = (props) => {
    const classes = useMemo(() => {
        if (props.className) return props.className;
        return defaultClasses[props.variant];
    }, [props]);

    switch (props.variant) {
        case 'h6':
            return <h6 className={classes} {...props}>{props.children}</h6>;
        case 'h5':
            return <h5 className={classes} {...props}>{props.children}</h5>;
        case 'h4':
            return <h4 className={classes} {...props}>{props.children}</h4>;
        case 'h3':
            return <h3 className={classes} {...props}>{props.children}</h3>;
        case 'h2':
            return <h2 className={classes} {...props}>{props.children}</h2>
        default:
            return <h1 className={classes} {...props}>{props.children}</h1>;
    }
};