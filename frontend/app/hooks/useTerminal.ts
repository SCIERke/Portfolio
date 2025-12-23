'use client'
import { useState, useCallback, useRef, useEffect } from 'react';

interface TerminalHistoryItem {
  command: string;
  timestamp: Date;
  output?: string;
}

export default function useTerminal(onInfo?: () => void, onPdfCommand?: () => void) {
  const [terminalHistory, setTerminalHistory] = useState<TerminalHistoryItem[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  

  const handleSubmit = useCallback((value: string) => {
    console.log("Terminal command:", value);

    // Add command to history
    const newEntry: TerminalHistoryItem = {
      command: value,
      timestamp: new Date(),
    };

    // Process commands
    if (value === "clear") {
      setTerminalHistory([]);
      return;
    }

    if (value === "help") {
      newEntry.output = `
Usage: <command>

Available Commands:
clear       Clear terminal history
help        Show this help message
info        Open information window
`;
    } else if (value === "start") {
      const welcomeText = `=============================================
==   #   #  #####  #      #       ###      ==
==   #   #  #      #      #      #   #     ==
==   #####  #####  #      #      #   #     ==
==   #   #  #      #      #      #   #     ==
==   #   #  #####  #####  #####   ###      ==
=============================================
==   Welcome new visitor to my website!    ==
==   Type 'help' for available commands.   ==
=============================================
`;
      newEntry.output = welcomeText;

    } else if (value === "info") {
      newEntry.output = "Opening info window...";
      if (onInfo) onInfo();
    } else if (value === "pdf_reader") {
        newEntry.output = "Opening PDF Reader...";
        if (onPdfCommand) onPdfCommand();
    } else {
      newEntry.output = `There is no '${value}' command`;
    }

    setTerminalHistory(prev => [...prev, newEntry]);
  }, [onInfo, onPdfCommand]);

  useEffect(() => {
    setTimeout(()=>{
      handleSubmit("start");
    }, 500)
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const clearHistory = useCallback(() => {
    setTerminalHistory([]);
  }, []);

  return {
    terminalHistory,
    handleSubmit,
    clearHistory,
    chatRef,
  };
}