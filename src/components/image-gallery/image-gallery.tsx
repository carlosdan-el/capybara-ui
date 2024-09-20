import React, { ComponentProps, useMemo } from "react";
import { Image } from "../../base/image/image";

export interface ImageGalleryProps extends ComponentProps<'div'> {

}

export function ImageGallery({
    children,
    ...props
}: ImageGalleryProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'w-full'
        ];

        return values.join(' ');
    }, [props]);

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}

export interface ImageGalleryTitleProps extends ComponentProps<'h3'> { }

export function ImageGalleryTitle({ children, ...props }: ImageGalleryTitleProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'text-2xl',
            'font-medium',
            'mb-4'
        ];

        return values.join(' ');
    }, [props]);

    return (
        <h3 className={classes} {...props}>
            {children}
        </h3>
    );
}

export interface ImageGalleryItemsProps extends ComponentProps<'div'> { }

export function ImageGalleryItems({
    children,
    ...props
}: ImageGalleryItemsProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'w-full',
            'grid',
            'grid-row',
            'gap-4',
            'grid-cols-1',
            'sm:grid-cols-2',
            'lg:grid-cols-3',
            'xl:grid-cols-4'
        ];

        return values.join(' ');
    }, [props]);

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}

export interface ImageGalleryItemProps extends ComponentProps<'div'> {
    src: string
    alt: string
    title?: string
    imageFullScreenContainerId?: string
}

export function ImageGalleryItem(props: ImageGalleryItemProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'bg-zinc-300',
            'rounded-3xl',
            'overflow-hidden',
            'aspect-[16/9]',
            'relative'
        ];

        return values.join(' ');
    }, []);

    return (
        <div className={classes}>
            <figure>
                <Image
                    src={props.src}
                    alt={props.alt}
                    title={props.title}
                    imageFullScreenContainerId={props.imageFullScreenContainerId}
                />
            </figure>
        </div>
    );
}