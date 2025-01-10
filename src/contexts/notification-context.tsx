import React, { createContext, useCallback, useEffect, useState } from "react";
import { Toast, ToastProps } from "../components/toast/toast.js";

type NotificationContextProps = {
    addNotification: (toast: ToastProps) => void
};

export const NotificationContext = createContext({} as NotificationContextProps);

export const NotificationProvider = (
    { children }: { children: JSX.Element | React.ReactNode }
) => {
    const [notifications, setNotifications] = useState<ToastProps[]>([]);
    const addNotification = useCallback((notification: ToastProps) =>
        setNotifications(notifications => [...notifications, notification]), []);
    const removeNotification = useCallback((index: number) =>
        setNotifications(notifications => notifications.filter((_, i) => i !== index)), []);

    useEffect(() => {
        const notificationLength = notifications.length;

        if (notificationLength > 0) {
            const duration = 6000 + (notificationLength * 2000);
            const time = setTimeout(() => setNotifications(notifications => notifications.slice(1)), duration);
            return () => clearTimeout(time);
        }
        return () => { };
    }, [notifications]);

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className="fixed bottom-4 right-4 space-y-4 z-50">
                {notifications.map((notification, index) => (
                    <Toast
                        key={index}
                        type={notification.type}
                        title={notification.title}
                        message={notification.message}
                        onRemove={() => removeNotification(index)}
                    />
                ))}
            </div>
        </NotificationContext.Provider>
    );
};