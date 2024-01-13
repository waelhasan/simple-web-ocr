import { DragEvent, MutableRefObject } from "react"
import { BusyIndicator } from "./BusyIndicator"

export const PhotoArea = ({
    isScanning,
    isImageSelected,
    photoRef,
    photoPreviewRef,
    usePhotoFile
}: {
    isScanning: boolean,
    isImageSelected: boolean
    photoRef: MutableRefObject<HTMLInputElement | undefined>
    photoPreviewRef: MutableRefObject<HTMLImageElement | undefined>
    usePhotoFile: (photoFile: File) => void
}) => {
    function onImagePreviewClick() {
        !!photoRef.current && photoRef.current.click()
    }

    function onDrop(ev: DragEvent<HTMLDivElement>) {
        ev.preventDefault()
        if (ev.dataTransfer.items) {
            [...ev.dataTransfer.items].forEach(
                item => item.kind === "file" && usePhotoFile(item.getAsFile()!)
            )
        } else[...ev.dataTransfer.files].forEach(usePhotoFile)
    }

    return (
        <div onDragOver={e => e.preventDefault()}
            onDrop={onDrop}
            className="
            relative 
            drop-shadow
            bg-[--background-alternate-2] 
            rounded-[1rem]
            border-[1px] border-solid border-[--background-alternate-2]">
            <BusyIndicator isScanning={isScanning} />
            {isScanning && <div className="absolute top-0 left-0 h-full w-full bg-[--overlay]" />}
            <div className="
                cursor-pointer
                flex items-center justify-center
                h-[30rem] min-w-[30rem]"
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