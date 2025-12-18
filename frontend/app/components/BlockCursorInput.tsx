"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { sfFont } from "../fonts";

interface BlockCursorInputProps {
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  initialValue?: string;
}

export default function BlockCursorInput({ onChange, onSubmit, initialValue = "" }: BlockCursorInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const caretRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");

  const updateCaretPosition = useCallback(() => {
    const input = inputRef.current;
    const caret = caretRef.current;
    if (!input || !caret) return;

    const cursorPosition = input.selectionStart ?? 0;
    const tempSpan = document.createElement("span");
    const computedStyle = window.getComputedStyle(input);

    // Copy input styles to temporary span for measurement
    tempSpan.style.font = computedStyle.font;
    tempSpan.style.fontSize = computedStyle.fontSize;
    tempSpan.style.padding = computedStyle.padding;
    tempSpan.style.whiteSpace = "pre";
    tempSpan.style.visibility = "hidden";
    tempSpan.textContent = value.slice(0, cursorPosition);

    document.body.appendChild(tempSpan);

    // Position the custom caret
    caret.style.left = `${input.offsetLeft + tempSpan.offsetWidth}px`;
    caret.style.top = `${input.offsetTop}px`;

    document.body.removeChild(tempSpan);
  }, [value]);

  useEffect(() => {
    updateCaretPosition();
  }, [updateCaretPosition]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit?.(value);
      setValue("");
    }
  };

  return (
    <div className="relative inline-block">
      <div
        ref={caretRef}
        className="absolute w-2 bg-[#929291] h-[1.2em] animate-blink pointer-events-none"
      />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onKeyUp={updateCaretPosition}
        onClick={updateCaretPosition}
        className={`caret-transparent bg-transparent border-none focus:outline-none text-sm ${sfFont.className}`}
        aria-label="Terminal input"
      />
    </div>
  );
}
