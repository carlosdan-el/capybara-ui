import React from 'react';
import infoAnimation from './info-animation.json';
import successAnimation from './success-animation.json';
import warningAnimation from './warning-animation.json';
import dangerAnimation from './danger-animation.json';
import LazyLottie from '../lazy-lottie/lazy-lottie';

export interface ToastProps {
    type: 'info' | 'success' | 'warning' | 'danger'
    title: string
    message: string
    onRemove?: () => void
}

const ANIMATIONS = {
    info: infoAnimation,
    success: successAnimation,
    warning: warningAnimation,
    danger: dangerAnimation
};

export function Toast({
    type,
    title,
    message
}: ToastProps) {
    const animationData = ANIMATIONS[type];

    return (
        <div className="w-full max-w-sm p-4 bg-white shadow-xl rounded-xl flex space-x-4">
            <LazyLottie
                loop
                animationData={animationData}
                play
                style={{ width: 28, height: 28 }}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
            <div className="text-sm font-normal space-y-1">
                <p className="font-medium text-zinc-800">{title}</p>
                <p className="text-zinc-500">{message}</p>
            </div>
        </div>
    );
};