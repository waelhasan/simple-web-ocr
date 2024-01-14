export function Buttons({
    isExtracting,
    onClearBtnClick,
    onExtractBtnClick,
    isImageSelected
}: {
    isImageSelected: boolean,
    isExtracting: boolean,
    onClearBtnClick: () => void,
    onExtractBtnClick: () => void,
}) {
    return (
        <div className="flex gap-0">
            <button
                type="button"
                disabled={isExtracting || !isImageSelected}
                onClick={onExtractBtnClick}
                className="
                rounded-l-[1rem] border-[1px] border-transparent 
                    hover:border-[--background-alternate-2]
                    disabled:border-transparent
                duration-75
                bg-[--active] hover:bg-[--active-alternate] disabled:bg-gray-500
                py-[0.5rem] px-[3rem]
                cursor-pointer
                w-full h-full">
                Extract
            </button>
            <button
                type="button"
                disabled={isExtracting || !isImageSelected}
                onClick={onClearBtnClick}
                className="
                inline-block
                rounded-r-[1rem] border-[1px] border-transparent 
                    hover:border-[--background-alternate-2]
                    disabled:border-transparent
                duration-75
                bg-[--background-danger] hover:bg-[--background-danger-alternate-1] disabled:bg-gray-500
                py-[0.5rem] px-[2.5rem]">
                Clear
            </button>
        </div>
    )
}