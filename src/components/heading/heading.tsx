import React, { HTMLAttributes, useMemo } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    overrideStyles?: boolean
}

const DEFAULT_STYLES = {
    h1: 'text-5xl font-extrabold text-gray-800 dark:text-white',
    h2: 'text-4xl font-bold text-gray-800 dark:text-white',
    h3: 'text-3xl font-bold text-gray-800 dark:text-white',
    h4: 'text-2xl font-bold text-gray-800 dark:text-white',
    h5: 'text-xl font-bold text-gray-800 dark:text-white',
    h6: 'text-lg font-bold text-gray-800 dark:text-white'
};

export const Heading = ({
    variant = 'h1',
    overrideStyles = false,
    className,
    children,
    ...rest
}: HeadingProps) => {
    const styles = useMemo(() => {
        if (className && overrideStyles) return className;
        return [DEFAULT_STYLES[variant], className].join(' ').trim();
    }, [variant, className]);

    switch (variant) {
        case 'h6':
            return <h6 className={styles} {...rest}>{children}</h6>;
        case 'h5':
            return <h5 className={styles} {...rest}>{children}</h5>;
        case 'h4':
            return <h4 className={styles} {...rest}>{children}</h4>;
        case 'h3':
            return <h3 className={styles} {...rest}>{children}</h3>;
        case 'h2':
            return <h2 className={styles} {...rest}>{children}</h2>
        default:
            return <h1 className={styles} {...rest}>{children}</h1>;
    }
};