import { useState, useEffect ,useRef } from 'react';

export default function useTypewriter(
    text: string,
    speed: number = 30,
    start: boolean = true
) {
    const indexRef = useRef<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [output, setOutput] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (!start) return;

        indexRef.current = 0;
        setOutput("");
        setIsDone(false);
        
        intervalRef.current = setInterval(() => {
            if (indexRef.current < text.length) {
                const char = text[indexRef.current];
                setOutput((prevOutput) => prevOutput + char);
                indexRef.current++;
            } else {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsDone(true);
            }
        }, speed);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [text, speed, start]);

    return { output, isDone };
}