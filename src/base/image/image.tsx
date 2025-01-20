import React, { ComponentProps, useMemo } from "react";
import { cn } from "../../lib/utils";

export interface ImageProps extends ComponentProps<'img'> {
    imageFullScreenContainerId?: string
}

export function Image({
    imageFullScreenContainerId = undefined,
    loading = 'lazy',
    ...props
}: ImageProps) {
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
            className={cn(
                'w-full',
                'h-full',
                'object-cover',
                'object-center',
                { 'cursor-pointer': imageFullScreenContainerId },
            )}
            {...props}
        />
    );
}