import { useState } from "react";
import useTypewriter from "@/app/hooks/useTypewriter";
import { personalInfoAscii } from "./asciiArt";
import { sfFont } from "../../fonts";
import DragSlider from "../DragSlider";
import SliderCard from "../SliderCard";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/app/components/ui/sheet";
import ContactForm from "../ContactForm";

const INTRO_TEXT = "Hi, I'm Peerapat Setsuk, a Software Developer with a passion for exploring emerging technologies. I'm currently pursuing my studies at Chulalongkorn University.";
const DESC_TEXT = "I dedicate my time to coding and crafting innovative solutions, driven by the ambition to build software that makes a meaningful impact.";

export default function PersonalInfo({ onResumeClick }: { onResumeClick?: () => void }) {
    const { output: text1, isDone: isText1Done } = useTypewriter(INTRO_TEXT);
    const { output: text2 } = useTypewriter(DESC_TEXT, 30, isText1Done);
    const [isEmailOpen, setIsEmailOpen] = useState(false);

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
            <div style={{ height: '300px', position: 'relative' }} className={`${sfFont.className}`}>
                <DragSlider className="absolute inset-0 gap-6 p-2 animate-slide-in-up items-center">
                    {/* Github Card */}
                    <SliderCard 
                        imagePath="/images/logo/github.png" 
                        title="Github" 
                        description="Check my code"
                        onClick={() => window.open('https://github.com/SCIERke', '_blank')}
                    />

                    {/* Email Card */}
                    <SliderCard
                        imagePath="/images/logo/gmail.png"
                        title="Email"
                        description="Get in touch"
                        onClick={() => setIsEmailOpen(true)}
                    />

                    {/* LinkedIn Card */}
                    <div className="snap-center min-w-[200px] h-[200px] bg-neutral-900/5 backdrop-blur-sm rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between hover:bg-neutral-900/10 transition-all duration-300 ease-in-out items-center">
                        <div className="text-3xl"></div>
                        <div>
                            <h3 className="font-bold text-lg">LinkedIn</h3>
                            <p className="text-sm text-neutral-500">Connect with me</p>
                        </div>
                    </div>

                    {/* Other Links Card */}
                    <div 
                        className="min-w-[200px] h-[200px] bg-neutral-900/5 backdrop-blur-sm rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between hover:bg-neutral-900/10 transition-all duration-300 ease-in-out items-center cursor-pointer"
                        onClick={onResumeClick}
                    >
                        <div className="text-3xl"></div>
                        <div>
                            <h3 className="font-bold text-lg">Resume</h3>
                            <p className="text-sm text-neutral-500">See my path</p>
                        </div>
                    </div>
                </DragSlider>
            </div>

            <Sheet open={isEmailOpen} onOpenChange={setIsEmailOpen}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Email</SheetTitle>
                        <SheetDescription>Get in touch</SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col items-center justify-center h-[90%] w-full gap-4 pt-4"> {/* Adjusted height and padding */}
                        <ContactForm />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}