"use client"

import { useRef, useState } from "react"
import { FileInput } from "./FileInput"

const defaultPhotoPath = ""

export const Photo = () => {
    const photoRef = useRef<HTMLInputElement>()
    const photoPreviewRef = useRef<HTMLImageElement>()
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [isScanning, setIsScanning] = useState(false)

    function onImagePreviewClick() {
        !!photoRef.current && photoRef.current.click()
    }

    function onClearBtnClick() {
        !!photoRef.current && (photoRef.current.value = "")
        photoPreviewRef.current!.src = defaultPhotoPath!
        setIsImageSelected(false)
    }

    function onPhotoChange(evt: any) {
        const tgt = evt.target
        const files = tgt.files

        if (FileReader && files && files.length) {
            const fr = new FileReader()
            fr.onload = () => !!fr.result && (photoPreviewRef.current!.src = fr.result as any)
            fr.readAsDataURL(files[0])
            setIsImageSelected(true)
        }
    }

    return (
        <div className="flex flex-col gap-[1rem] items-center w-full mb-[1rem]">
            <div className="
                cursor-pointer
                flex items-center justify-center
                h-[30rem] min-w-[30rem] 
                border-[1px] border-solid border-[--background-alternate-2]"
                onClick={onImagePreviewClick}
            >
                {!isImageSelected ?
                    <h1>
                        Select a photo to start scanning
                    </h1> : null
                }
                <img className="h-full"
                    ref={photoPreviewRef as any}
                />
            </div >
            <FileInput
                id="photo"
                name="photo"
                inputRef={photoRef}
                multipleFiles={false}
                onChange={onPhotoChange}
                onClearBtnClick={onClearBtnClick}
                onScanBtnClick={() => alert('SCANNING')}
                isScanning={isScanning}
            />
        </div>
    )
}