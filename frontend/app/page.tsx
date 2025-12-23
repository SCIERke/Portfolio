"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";
import useDraggable from "./hooks/useDragger";
import useTerminal from "./hooks/useTerminal";
import Terminal from "./components/TerminalCard";
import DraggableWindow from "./components/DraggableWindow";
import { WINDOW_REGISTRY, WindowId } from "./config/windows";

export default function Home() {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState<boolean>(false);
  const [activeWindows, setActiveWindows] = useState<WindowId[]>([]);

  // Calculate dynamic initial positions (just a helper for now)
  const getInitialWindowPosition = (offsetIndex: number) => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    return {
        x: window.innerWidth / 2 - 200 + (offsetIndex * 30),
        y: window.innerHeight / 2 - 150 + (offsetIndex * 30),
    };
  };

  const openWindow = useCallback((id: WindowId) => {
      setActiveWindows(prev => {
          if (prev.includes(id)) {
              // Bring to front (move to end of array)
              return [...prev.filter(w => w !== id), id];
          }
          return [...prev, id];
      });
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
      setActiveWindows(prev => prev.filter(w => w !== id));
  }, []);

  const handleInfoCommand = useCallback(() => openWindow('info'), [openWindow]);
  const handleResumeCommand = useCallback(() => openWindow('resume'), [openWindow]);

  const { terminalHistory, handleSubmit, chatRef } = useTerminal(handleInfoCommand, handleResumeCommand);

  useEffect(() => {
    setIsClient(true);
    setStartPos({
      x: window.innerWidth / 2 - (window.innerWidth * 0.5) / 2,
      y: window.innerHeight / 2 - (window.innerHeight * 0.5) / 2,
    });
  }, []);

  const { position, handleMouseDown, ref } = useDraggable(startPos.x, startPos.y);

  return (
    <div className="bg-black w-screen h-screen relative">
      <Terminal 
        position={position} 
        handleMouseDown={handleMouseDown} 
        styles={styles} 
        terminalHistory={terminalHistory} 
        onSubmit={handleSubmit} 
        dragRef={ref} 
        chatRef={chatRef}
      />
      
      {activeWindows.map((id) => {
          const config = WINDOW_REGISTRY[id];
          if (!config) return null;

          // Special prop handling for "info" window to support triggering the resume
          const componentProps = id === 'info' ? { onResumeClick: () => openWindow('resume') } : {};

          return (
            <DraggableWindow 
                key={id}
                config={{
                    ...config,
                    // If no initial position is set in config, simple cascade could be done here, 
                    // but for now DraggableWindow defaults to center.
                    // We could enhance this to pass a computed position.
                }}
                onClose={() => closeWindow(id)}
                styles={styles}
                componentProps={componentProps}
            />
          );
      })}
    </div>
  );
}
