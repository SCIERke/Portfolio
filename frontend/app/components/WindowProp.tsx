import { sfFont } from "../fonts"

type WindowProps = {
    title: string;
    position: { x: number; y: number };
    maxWidth?: number | string;
    handleMouseDown: (e: React.MouseEvent) => void;
    styles: { readonly [key: string]: string };
    onClose?: () => void;
    dragRef?: React.RefObject<HTMLDivElement | null>;
    children: React.ReactNode;
}

export default function WindowProp({
    title,
    position,
    maxWidth,
    handleMouseDown,
    styles,
    onClose,
    dragRef,
    children
}: WindowProps) {
    return (
        <div
            ref={dragRef}
            className={`w-96 h-64 bg-white text-black absolute rounded-2xl ${sfFont.className} flex flex-col resize overflow-hidden shadow-xl border border-gray-200`}
            style={{
            left: position.x,
            top: position.y,
            zIndex: 50,
            maxWidth: maxWidth
            }}
        >
            <div 
                className="rounded-t-2xl border-b border-gray-200 bg-gray-50 p-3 cursor-move flex justify-between items-center select-none" 
                onMouseDown={handleMouseDown}
            >
                <div className="flex gap-2">
                    <button 
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                    />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm font-semibold text-gray-500">
                    {title}
                </div>
                <div className="w-10" />
                {/* Spacer for centering */}
            </div>
            <div className="flex-1 overflow-auto p-6">
                {children}
            </div>
        </div>
    )
}