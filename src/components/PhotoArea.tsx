import { MutableRefObject } from "react"
import { BusyIndicator } from "./BusyIndicator"

export const PhotoArea = ({
    isScanning,
    isImageSelected,
    photoRef,
    photoPreviewRef
}: {
    isScanning: boolean,
    isImageSelected: boolean
    photoRef: MutableRefObject<HTMLInputElement | undefined>
    photoPreviewRef: MutableRefObject<HTMLImageElement | undefined>
}) => {
    function onImagePreviewClick() {
        !!photoRef.current && photoRef.current.click()
    }

    return (
        <div className="relative">
            <BusyIndicator isScanning={isScanning} />
            {isScanning && <div className="absolute top-0 left-0 h-full w-full bg-[--overlay]" />}
            <div className="
                cursor-pointer
                flex items-center justify-center
                h-[30rem] min-w-[30rem] 
                border-[1px] border-solid border-[--background-alternate-2]"
                onClick={onImagePreviewClick}>
                {!isImageSelected ?
                    <h1 className="text-[1.5rem]">
                        Click here to select a photo
                    </h1> : null
                }
                <img className="h-full" ref={photoPreviewRef as any} />
            </div>
        </div>
    )
}