import useTypewriter from "@/app/hooks/useTypewriter";
import { personalInfoAscii } from "./asciiArt";

const INTRO_TEXT = "Hi, I'm Peerapat Setsuk, a Software Developer with a passion for exploring emerging technologies. I'm currently pursuing my studies at Chulalongkorn University.";
const DESC_TEXT = "I dedicate my time to coding and crafting innovative solutions, driven by the ambition to build software that makes a meaningful impact.";

export default function PersonalInfo() {
    const { output: text1, isDone: isText1Done } = useTypewriter(INTRO_TEXT);
    const { output: text2 } = useTypewriter(DESC_TEXT, 30, isText1Done);

    return (
        <div className="p-2 flex flex-col gap-2">
            <div className="relative w-full">
                <div className="text-[5px] leading-none font-mono whitespace-pre overflow-hidden">
{personalInfoAscii}
                </div>
            </div>
            <h1 className="text-2xl font-bold">Hello~</h1>
            <p className="text-sm leading-relaxed">
                {text1}
            </p>
            <p className="text-sm leading-relaxed">
                {text2}
            </p>
            <h1 className="text-2xl font-bold">Contact</h1>
            
        </div>
    );
}