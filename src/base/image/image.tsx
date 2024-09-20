import React, { ComponentProps, useContext, useMemo, useState } from "react";

export interface ImageProps extends ComponentProps<'img'> {
    imageFullScreenContainerId?: string
}

export function Image({
    imageFullScreenContainerId = undefined,
    loading = 'lazy',
    ...props
}: ImageProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'h-full',
            'object-cover',
            'object-center'
        ];

        if (imageFullScreenContainerId) {
            values.push('cursor-pointer');
        }

        return values.join(' ');
    }, [props]);

    const handleFullScreen = (id: string) => {
        const container: HTMLElement | null = document.getElementById(id);
        const img: HTMLImageElement | null = document.querySelector(`#${id} img`);

        if (container && img) {
            img.src = props.src!;
            container.style.visibility = 'visible';
            container.style.opacity = '1';
        }
    };

    return (
        <img
            onClick={imageFullScreenContainerId ? () => handleFullScreen(imageFullScreenContainerId!) : undefined}
            loading={loading}
            className={classes}
            {...props}
        />
    );
}