import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string; // Allow passing extra classes
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    width = 'fit-content',
    delay = 0,
    direction = 'up',
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger once
                }
            },
            {
                threshold: 0.15, // Trigger when 15% coming into view
                rootMargin: '0px 0px -50px 0px' // Slightly offset bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getTranslateData = () => {
        switch (direction) {
            case 'up': return 'translate-y-20';
            case 'down': return '-translate-y-20';
            case 'left': return 'translate-x-20';
            case 'right': return '-translate-x-20';
            default: return 'translate-y-20';
        }
    };

    const transitionDelay = `${delay}s`;

    return (
        <div
            ref={ref}
            style={{ width }}
            className={`relative ${className}`}
        >
            <div
                className={`transform transition-all duration-1000 ease-[cubic-bezier(0.17,0.55,0.55,1)] ${isVisible
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : `opacity-0 ${getTranslateData()}`
                    }`}
                style={{ transitionDelay }}
            >
                {children}
            </div>
        </div>
    );
};
