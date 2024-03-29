export function BusyIndicator({ isExtracting }: { isExtracting: boolean }) {
    return isExtracting && (
        <div className="
            w-[100%] h-[0.2rem] 
            bg-[inherit]
            absolute top-0
            overflow-hidden
        ">
            <div className="
                absoulte top-0
                w-[100%] h-[100%]
                rounded-full
                bg-[--foreground]
                animate-[passing_2s_ease-in-out_infinite]
            "/>
        </div>
    )
}