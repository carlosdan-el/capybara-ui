import React, { ComponentProps, useMemo } from "react";
import { Button, Image } from "../../base";

export interface ImageFullScreenContainerProps extends ComponentProps<'div'> {
    id: string
}

export function ImageFullScreenContainer({ id, ...props }: ImageFullScreenContainerProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'absolute',
            'inset-0',
            'bg-black/80',
            'backdrop-blur-xl',
            'overflow-hidden',
            'flex',
            'flex-col',
            'items-center',
            'opacity-0',
            'invisible',
            'transition-opacity',
            'p-4'
        ];

        return values.join(' ');
    }, [props]);
    const handleHideContainer = () => {
        const container: HTMLElement | null = document.getElementById(id);
        const img: HTMLImageElement | null = document.querySelector(`#${id} img`);

        if (container && img) {
            const currentVisibility = container.style.visibility;
            if (currentVisibility === 'visible') {
                img.src = '#';
                container.style.visibility = 'hidden';
                container.style.opacity = '0';
            }
        }
    };

    return (
        <div id={id} className={classes}>
            <div className="w-full flex justify-end items-center pb-4">
                <Button onClick={handleHideContainer} color="zinc" emphasis="none" size="sm">X</Button>
            </div>
            <div className="h-full overflow-hidden aspect-auto mx-auto">
                <Image />
            </div>
        </div>
    );
}