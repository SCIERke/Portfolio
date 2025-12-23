'use client';

import React, { useRef, useState, MouseEvent, useEffect } from 'react';

interface DragSliderProps {
    children: React.ReactNode;
    className?: string;
}

export default function DragSlider({ children, className = '' }: DragSliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const startX = useRef(0);
    const startScrollLeft = useRef(0);
    const textRef = useRef<number>(0);

    // Initialize scroll position to the middle set
    useEffect(() => {
        if (sliderRef.current) {
            const scrollWidth = sliderRef.current.scrollWidth;
            const singleSetWidth = scrollWidth / 3;
            sliderRef.current.scrollLeft = singleSetWidth;
            // No need to set startScrollLeft here, it's set on MouseDown
        }
    }, [children]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current && !isDown && !isHovering) {
                // Determine card width (approximate from first child or fixed assumption)
                // Since specific children structure might vary, we can try to find the first child element
                const firstCard = sliderRef.current.firstElementChild as HTMLElement;
                const cardWidth = firstCard ? firstCard.clientWidth : 200; // fallback
                // Add gap estimation if possible, or just scroll enough for snap to catch next
                const scrollAmount = cardWidth + 20; // +20 for gap approx

                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 1500); 

        return () => clearInterval(interval);
    }, [isDown, isHovering]);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsDown(true);
        if (sliderRef.current) {
            startX.current = e.pageX - sliderRef.current.offsetLeft;
            startScrollLeft.current = sliderRef.current.scrollLeft;
        }
    };

    const snapToNearest = () => {
        if (!sliderRef.current) return;
        
        const firstCard = sliderRef.current.firstElementChild as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.clientWidth; // Allow variable width if needed, but assuming roughly uniform
        const gap = 20; // Estimated gap from parent flex gap-4 (16px) or gap-6 (24px) - using 24px based on recent gap-6 change
        const itemWidth = cardWidth + 24; // card + gap
        
        const scrollLeft = sliderRef.current.scrollLeft;
        const nearestIndex = Math.round(scrollLeft / itemWidth);
        const targetScroll = nearestIndex * itemWidth;

        sliderRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    const handleMouseLeave = () => {
        if (isDown) {
            snapToNearest();
        }
        setIsDown(false);
        setIsHovering(false);
    };

    const handleMouseUp = () => {
        if (isDown) {
            snapToNearest();
        }
        setIsDown(false);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll speed multiplier
        sliderRef.current.scrollLeft = startScrollLeft.current - walk;
    };

    const handleScroll = () => {
        if (!sliderRef.current) return;
        
        const scrollWidth = sliderRef.current.scrollWidth;
        const scrollLeft = sliderRef.current.scrollLeft;
        const singleSetWidth = scrollWidth / 3;

        // If scrolled into the first set (prefix), jump to middle set (approx)
        if (scrollLeft < singleSetWidth - 50) { // 50px buffer
             const delta = singleSetWidth;
             sliderRef.current.scrollLeft = scrollLeft + delta;
             // If dragging, adjust the anchor point so we don't jump back
             if (isDown) {
                 startScrollLeft.current += delta;
             }
        } 
        // If scrolled into the last set (suffix), jump to middle set
        else if (scrollLeft > singleSetWidth * 2 + 50) { // 50px buffer
             const delta = singleSetWidth;
             sliderRef.current.scrollLeft = scrollLeft - delta;
             // If dragging, adjust the anchor point
             if (isDown) {
                 startScrollLeft.current -= delta;
             }
        }
    };

    return (
        <div
            ref={sliderRef}
            className={`flex overflow-x-hidden cursor-grab active:cursor-grabbing select-none ${className}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onScroll={handleScroll}
        >
            {/* First Set (Prefix Clone) */}
            {children}
            {/* Second Set (Real Items - Start Here) */}
            {children}
             {/* Third Set (Suffix Clone) */}
            {children}
        </div>
    );
}
