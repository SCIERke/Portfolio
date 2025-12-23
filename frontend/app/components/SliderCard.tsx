'use client';

import Image from "next/image";

interface SliderCardProps {
    imagePath: string;
    title: string;
    description: string;
    onClick?: () => void;
}

export default function SliderCard({ imagePath, title, description, onClick }: SliderCardProps) {
    return (
        <div 
            onClick={onClick}
            className="snap-center min-w-[200px] h-[200px] bg-neutral-900/5 backdrop-blur-sm rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between hover:bg-neutral-900/10 transition-all duration-300 ease-in-out items-center cursor-pointer"
        >
            {/* If imagePath starts with /, treat as static import, otherwise might need handling or assume external/static string */}
            <Image src={imagePath} alt={title} width={70} height={70} className="object-contain" />
            <div className="text-center">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-neutral-500">{description}</p>
            </div>
        </div>
    );
}
