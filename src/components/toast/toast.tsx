import React, { FC, useMemo } from 'react';
import Lottie from 'react-lottie';
import infoAnimation from './info-animation.json';
import successAnitation from './success-animation.json';
import warningAnimation from './warning-animation.json';
import dangerAnimation from './danger-animation.json';

export interface ToastProps {
    type: 'info' | 'success' | 'warning' | 'danger'
    message: string
}

const animations = {
    info: infoAnimation,
    success: successAnitation,
    warning: warningAnimation,
    danger: dangerAnimation
};

export const Toast: FC<ToastProps> = ({
    type = 'info',
    message = ''
}) => {
    const defaultOptions = useMemo(() => {
        return {
            loop: true,
            autoplay: true,
            animationData: animations[type],
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
    }, [type]);

    return (
        <div className="flex items-center w-full max-w-xs p-4 rtl:space-x-reverse text-gray-500 bg-white rounded-lg shadow-lg" role="alert">
            <div>
                <Lottie options={defaultOptions}
                    height={28}
                    width={28}
                    isStopped={false}
                    isPaused={false}
                    isClickToPauseDisabled
                />
            </div>
            <div className="ps-4 text-sm font-normal">{message}</div>
        </div>
    );
};