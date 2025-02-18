import React, { ComponentProps } from "react";
import { cn } from "../../lib/utils";

interface TextCounterProps extends ComponentProps<'span'> {
    currentLength: number
    maxLength: number
}

export function TextCounter({
    currentLength,
    maxLength,
    className
}: TextCounterProps) {
    return (
        <div className="w-full text-right">
            <span className={cn(
                'text-xs',
                'text-zinc-500',
                className
            )}>
                {currentLength}/{maxLength}
            </span>
        </div>
    );
}