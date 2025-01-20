import React, { ComponentProps, useMemo } from "react";
import { Image } from "../../base";
import { cn } from "../../lib/utils";

export interface ImageGalleryProps extends ComponentProps<'div'> { }

export function ImageGallery({
    children,
    className,
    ...props
}: ImageGalleryProps) {
    return (
        <div
            className={cn(
                'w-full',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export interface ImageGalleryTitleProps extends ComponentProps<'h3'> { }

export function ImageGalleryTitle({ children, className, ...props }: ImageGalleryTitleProps) {
    return (
        <h3
            className={cn(
                'text-2xl',
                'font-medium',
                'mb-4',
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

export interface ImageGalleryItemsProps extends ComponentProps<'div'> { }

export function ImageGalleryItems({
    children,
    className,
    ...props
}: ImageGalleryItemsProps) {
    return (
        <div
            className={cn(
                'w-full',
                'grid',
                'grid-row',
                'gap-4',
                'grid-cols-1',
                'sm:grid-cols-2',
                'lg:grid-cols-3',
                'xl:grid-cols-4',
                className
            )}
            {...props}
        >
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

export function ImageGalleryItem({ className, ...props }: ImageGalleryItemProps) {
    return (
        <div className={cn(
            'bg-zinc-300',
            'rounded-3xl',
            'overflow-hidden',
            'aspect-[1/1]',
            'relative',
            className
        )}>
            <Image
                src={props.src}
                alt={props.alt}
                title={props.title}
                imageFullScreenContainerId={props.imageFullScreenContainerId}
            />
        </div>
    );
}