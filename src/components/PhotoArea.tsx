import { DragEvent, MutableRefObject } from "react"
import { IoCloudUploadOutline } from "react-icons/io5"
import { BusyIndicator } from "./BusyIndicator"

export const PhotoArea = ({
    isExtracting,
    isImageSelected,
    photoRef,
    photoPreviewRef,
    setPhotoFromFile
}: {
    isExtracting: boolean,
    isImageSelected: boolean
    photoRef: MutableRefObject<HTMLInputElement | undefined>
    photoPreviewRef: MutableRefObject<HTMLImageElement | undefined>
    setPhotoFromFile: (photoFile: File) => void
}) => {
    function onImagePreviewClick() {
        !!photoRef.current && photoRef.current.click()
    }

    function onDrop(ev: DragEvent<HTMLDivElement>) {
        ev.preventDefault()
        if (ev.dataTransfer.items) {
            [...ev.dataTransfer.items].forEach(
                item => item.kind === "file" && setPhotoFromFile(item.getAsFile()!)
            )
        } else[...ev.dataTransfer.files].forEach(setPhotoFromFile)
    }

    return (
        <div onDragOver={e => e.preventDefault()}
            onDrop={onDrop}
            className="
            relative 
            flex flex-col justify-center items-center
            drop-shadow
            bg-[--background-alternate-2] 
            rounded-[1rem]">
            <div className="
                relative
                cursor-pointer
                h-[30rem] min-w-[30rem]
                rounded-[1rem]
                border-[1px] border-dashed border-[--foreground]
                flex flex-col justify-center items-center"
                onClick={onImagePreviewClick}>
                {isImageSelected ?
                    <img className="h-full" ref={photoPreviewRef as any} /> :
                    <div className="
                        absolute 
                        text-center p-[1rem]
                        h-full w-full 
                        flex flex-col justify-center items-center">
                        <IoCloudUploadOutline className="text-[3.5rem]" />
                        <h1 className="text-[1.5rem]">
                            Click to upload or drag and drop
                        </h1>
                    </div>
                }
            </div>
            <BusyIndicator isExtracting={isExtracting} />
            {isExtracting && <div className="absolute top-0 left-0 h-full w-full bg-[--overlay]" />}
        </div>
    )
}