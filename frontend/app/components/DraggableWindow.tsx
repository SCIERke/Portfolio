import { useState, useEffect } from 'react';
import useDraggable from '../hooks/useDragger';
import WindowProp from './WindowProp';
import { WindowConfig } from '../config/windows';

interface DraggableWindowProps {
    config: WindowConfig;
    onClose: () => void;
    styles: { readonly [key: string]: string };
    componentProps?: any; // Props to pass to the inner component
}

export default function DraggableWindow({ config, onClose, styles, componentProps }: DraggableWindowProps) {
    // Default start position (centerish) if not provided
    const defaultStartX = typeof window !== 'undefined' ? window.innerWidth / 2 - 200 : 0;
    const defaultStartY = typeof window !== 'undefined' ? window.innerHeight / 2 - 150 : 0;

    const startX = config.initialPosition?.x ?? defaultStartX;
    const startY = config.initialPosition?.y ?? defaultStartY;

    const { position, handleMouseDown, ref } = useDraggable(startX, startY);
    
    // We need to render the content component
    const ContentComponent = config.component;

    return (
        <WindowProp
            title={config.title}
            position={position}
            handleMouseDown={handleMouseDown}
            onClose={onClose}
            dragRef={ref}
            styles={styles}
            maxWidth={config.maxWidth}
        >
            <ContentComponent {...componentProps} />
        </WindowProp>
    );
}
