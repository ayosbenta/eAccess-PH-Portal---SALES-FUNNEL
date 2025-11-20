
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
    const calculateTimeLeft = (): CountdownTime | {} => {
        const difference = +targetDate - +new Date();
        let timeLeft: CountdownTime | {} = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<CountdownTime | {}>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: React.ReactNode[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        const key = interval as keyof CountdownTime;
        if (!timeLeft.hasOwnProperty(key)) return;

        timerComponents.push(
            <div key={key} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-secondary">
                    {String(timeLeft[key]).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase text-white tracking-wider">{key}</div>
            </div>
        );
    });

    return (
        <div className="flex justify-center space-x-4 md:space-x-8 my-6">
            {timerComponents.length ? timerComponents : <span className="text-xl text-brand-secondary font-bold">Offer has expired!</span>}
        </div>
    );
};

export default CountdownTimer;
