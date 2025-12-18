"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";
import useDraggable from "./hooks/useDragger";
import useTerminal from "./hooks/useTerminal";
import Terminal from "./components/TerminalCard";
import WindowProp from "./components/WindowProp";
import PersonalInfo from "./components/contents/PersonalInfo";

export default function Home() {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [infoStartPos, setInfoStartPos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoCommand = useCallback(() => {
    setShowInfo(true);
  }, []);

  const { terminalHistory, handleSubmit, chatRef } = useTerminal(handleInfoCommand);

  useEffect(() => {
    setIsClient(true);
    setStartPos({
      x: window.innerWidth / 2 - (window.innerWidth * 0.5) / 2,
      y: window.innerHeight / 2 - (window.innerHeight * 0.5) / 2,
    });
    setInfoStartPos({
      x: window.innerWidth / 2 - 192,
      y: window.innerHeight / 2 - 128,
    });
  }, []);

  const { position, handleMouseDown, ref } = useDraggable(startPos.x, startPos.y);
  const { position: infoPos, handleMouseDown: handleInfoMouseDown, ref: infoRef } = useDraggable(infoStartPos.x, infoStartPos.y);

  return (
    <div className="bg-black w-screen h-screen relative">
      <Terminal position={position} handleMouseDown={handleMouseDown} styles={styles} terminalHistory={terminalHistory} onSubmit={handleSubmit} dragRef={ref} chatRef={chatRef}/>
      {showInfo && (
        <WindowProp 
          title="Info"
          position={infoPos} 
          handleMouseDown={handleInfoMouseDown} 
          onClose={() => setShowInfo(false)}
          dragRef={infoRef}
          styles={styles}
          maxWidth={420}
        >
          <PersonalInfo/>
        </WindowProp>
      )}
    </div>
  );
}
