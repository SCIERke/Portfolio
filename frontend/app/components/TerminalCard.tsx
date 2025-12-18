import BlockCursorInput from "./BlockCursorInput"
import { sfFont } from "../fonts"
export default function Terminal({
  position,
  handleMouseDown,
  styles,
  terminalHistory,
  onSubmit,
  dragRef,
  chatRef,
}: {
  position: { x: number; y: number };
  handleMouseDown: (e: React.MouseEvent) => void;
  styles: { readonly [key: string]: string };
  terminalHistory: object[];
  onSubmit?: (value: string) => void;
  dragRef?: React.RefObject<HTMLDivElement | null>;
  chatRef?: React.RefObject<HTMLDivElement | null>;
}) {
  
  return (
    <div
      ref={dragRef}
      className={`${styles.card} w-1/2 h-1/2 text-2xl absolute rounded-2xl ${sfFont.className} flex flex-col resize overflow-hidden`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className="rounded-t-2xl border-b-2 border-[#e5e5e5] w-auto h-auto bg-white p-3 cursor-move" onMouseDown={handleMouseDown}>
        <div className="flex flex-row items-center mb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" />
          </div>
        </div>
        <div className="bg-[#f1f1f1] border-[#e5e5e5] text-[#959595] border-2 p-2 text-center text-sm rounded-2xl font-bold">
          ~/Desktop/Portfolio
        </div>
      </div>
      <div ref={chatRef} className="rounded-b-2xl flex flex-col overflow-y-auto p-2 text-sm flex-1 min-h-0">
        {terminalHistory.length > 0 ? (
          terminalHistory.map((item: any, index) => (
            <div key={index} className="mb-2">
              <div className="flex gap-2">
                <span className="text-black">(base) user@visitor Portfolio %</span>
                <span>{item.command}</span>
              </div>
              {item.output && (
                <div className="text-black ml-2 whitespace-pre-wrap">{item.output}</div>
              )}
            </div>
          ))
        ) : (
          ""
        )}
        <div className={`flex flex-row gap-2 ${sfFont.className}`}>
          <div className="text-black">
            (base) user@visitor Portfolio %
          </div>
          <div>
            <BlockCursorInput
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}