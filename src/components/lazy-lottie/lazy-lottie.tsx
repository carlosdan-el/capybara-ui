import { LottieProps } from "react-lottie-player";
import React, { Suspense, lazy } from 'react';

const Lottie = lazy(() => import('react-lottie-player'));

export default function LazyLottie(props: LottieProps) {
    return (
        <Suspense fallback={<div className="w-7 h-7 bg-gray-50 rounded-full animate-pulse" />}>
            <Lottie {...props} />
        </Suspense>
    );
}