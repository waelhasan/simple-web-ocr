import { MutableRefObject } from 'react'

export function FileInput({
    id,
    name,
    onChange,
    inputRef,
    isScanning,
    onClearBtnClick,
    onScanBtnClick,
    multipleFiles = false
}: {
    id: string,
    name: string,
    onChange: (event: any) => void,
    inputRef: MutableRefObject<HTMLInputElement | undefined>,
    isScanning: boolean,
    onClearBtnClick: () => void,
    onScanBtnClick: () => void,
    multipleFiles: boolean
}) {
    return (
        <div className="
            flex gap-0
            [&_input:disabled+label]:bg-gray-500 
                [&_input:disabled+label]:border-transparent
                [&_input:disabled+label]:cursor-default
        ">
            <input
                id={id}
                type="file"
                className="hidden"
                multiple={multipleFiles}
                accept="image/*"
                onChange={onChange}
                ref={inputRef as any}
                disabled={isScanning}
            />
            <label htmlFor={name} className="
                rounded-l-[1rem] border-[1px] border-transparent 
                    hover:border-[--background-alternate-2]
                duration-75
                bg-[--active] hover:bg-[--active-alternate]
                py-[0.5rem] px-[3rem]
                cursor-pointer
                w-full h-full
            ">
                Select
            </label>
            <button
                type="button"
                disabled={isScanning}
                onClick={onScanBtnClick}
                className="
                inline-block
                border-[1px] border-transparent 
                    hover:border-[--background-alternate-2]
                    disabled:border-transparent
                duration-75
                bg-[--main] hover:bg-[--main-alternate-1] disabled:bg-gray-500
                py-[0.5rem] px-[3rem]
            ">
                Scan
            </button>
            <button
                type="button"
                disabled={isScanning}
                onClick={onClearBtnClick}
                className="
                inline-block
                rounded-r-[1rem] border-[1px] border-transparent 
                    hover:border-[--background-alternate-2]
                    disabled:border-transparent
                duration-75
                bg-[--background-danger] hover:bg-[--background-danger-alternate-1] disabled:bg-gray-500
                py-[0.5rem] px-[3rem]
            ">
                Remove
            </button>
        </div>
    )
}