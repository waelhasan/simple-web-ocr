"use client"

import { useRef, useState } from "react"
import Tesseract, { ImageLike } from "tesseract.js"
import { FileInput } from "./FileInput"
import { BusyIndicator } from "./BusyIndicator"
import { ErrorToast } from "./ErrorToast"

const defaultPhotoPath = ""

export const Photo = () => {
    const photoRef = useRef<HTMLInputElement>()
    const photoPreviewRef = useRef<HTMLImageElement>()
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [isScanning, setIsScanning] = useState(false)
    const [isFailure, setIsFailure] = useState(false)
    const [photoData, setPhotoData] = useState<ImageLike>()
    const [scannedText, setScannedText] = useState<string>()

    function onImagePreviewClick() {
        !!photoRef.current && photoRef.current.click()
    }

    function onClearBtnClick() {
        !!photoRef.current && (photoRef.current.value = "")
        photoPreviewRef.current!.src = defaultPhotoPath!
        setIsImageSelected(false)
    }

    async function onScanBtnClick() {
        if (!isImageSelected) return setIsFailure(true)
        setIsScanning(true)
        // Extrtact the text
        if (!!photoData) {
            const result = await Tesseract.recognize(photoData, "eng")
            setScannedText(result.data.text)
            setIsScanning(false)
        }
    }

    async function onPhotoChange(evt: any) {
        const tgt = evt.target
        const files = tgt.files

        if (FileReader && files && files.length) {
            const fr = new FileReader()
            fr.onload = () => !!fr.result && (photoPreviewRef.current!.src = fr.result as any)
            fr.readAsDataURL(files[0])
            setPhotoData(files[0])
            setIsImageSelected(true)
        }
    }

    return (
        <div className="flex flex-col gap-[1rem] items-center w-fit mb-[1rem]">
            <ErrorToast isFailure={isFailure} setIsFailure={setIsFailure} />
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
            <FileInput
                id="photo"
                inputRef={photoRef}
                multipleFiles={false}
                onChange={onPhotoChange}
                onClearBtnClick={onClearBtnClick}
                onScanBtnClick={onScanBtnClick}
                isScanning={isScanning} />
            <div>{scannedText}</div>
        </div>
    )
}