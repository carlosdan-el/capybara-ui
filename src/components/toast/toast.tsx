import React, { FC, useMemo } from 'react';
import Lottie from 'react-lottie-player';
import infoAnimation from './info-animation.json';
import successAnitation from './success-animation.json';
import warningAnimation from './warning-animation.json';
import dangerAnimation from './danger-animation.json';

export interface ToastProps {
    type: 'info' | 'success' | 'warning' | 'danger'
    message: string
}

const ANIMATIONS = {
    info: infoAnimation,
    success: successAnitation,
    warning: warningAnimation,
    danger: dangerAnimation
};

export const Toast: FC<ToastProps> = ({ type = 'info', message = '' }) => {
    const animationData = useMemo(() => {
        return ANIMATIONS[type];
    }, [type]);

    return (
        <div className="flex items-center w-full max-w-sm p-4 rtl:space-x-reverse text-gray-500 bg-white rounded-lg shadow-lg" role="alert">
            <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: 28, height: 28 }}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
            <div className="ps-4 text-sm font-normal">{message}</div>
        </div>
    );
};