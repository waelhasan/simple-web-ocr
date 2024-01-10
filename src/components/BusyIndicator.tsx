import { useContext } from "react"

export function BusyIndicator({ isScanning }: { isScanning: boolean }) {
    return isScanning && (
        <div className="
            w-[100%] h-[0.4rem] 
            bg-[inherit]
            absolute top-0
            overflow-hidden
        ">
            <div className="
                absoulte top-0
                w-[100%] h-[100%]
                rounded-full
                bg-[--active]
                animate-[passing_2s_ease-in-out_infinite]
            "/>
        </div>
    )
}