"use client"

import { useRef, useState } from "react"
import Tesseract, { ImageLike } from "tesseract.js"
import { ErrorToast } from "./ErrorToast"
import { ScannedText } from "./ScannedText"
import { LanguagesMenu } from "./LanguagesMenu"
import { Buttons } from "./Buttons"
import { PhotoArea } from "./PhotoArea"

const defaultPhotoPath = ""
const defaultImageLang = "eng"

export const Photo = () => {
    const photoRef = useRef<HTMLInputElement>()
    const photoPreviewRef = useRef<HTMLImageElement>()
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [isScanning, setIsScanning] = useState(false)
    const [isFailure, setIsFailure] = useState(false)
    const [photoData, setPhotoData] = useState<ImageLike>()
    const [scannedText, setScannedText] = useState<string>()
    const [imageLang, setImageLang] = useState<string>(defaultImageLang)

    function onClearBtnClick() {
        !!photoRef.current && (photoRef.current.value = "")
        photoPreviewRef.current!.src = defaultPhotoPath!
        setIsImageSelected(false)
        setScannedText("")
        setImageLang(defaultImageLang)
    }

    async function onScanBtnClick() {
        if (!isImageSelected) return setIsFailure(true)
        setIsScanning(true)
        // Extrtact the text
        if (!!photoData) {
            const result = await Tesseract.recognize(photoData, imageLang)
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
            <PhotoArea
                photoRef={photoRef}
                photoPreviewRef={photoPreviewRef}
                isImageSelected={isImageSelected}
                isScanning={isScanning} />
            <LanguagesMenu language={imageLang} setLanguage={setImageLang} />
            <input
                id="photo"
                type="file"
                className="hidden"
                multiple={false}
                accept="image/*"
                onChange={onPhotoChange}
                ref={photoRef as any}
                disabled={isScanning} />
            <Buttons
                onClearBtnClick={onClearBtnClick}
                onScanBtnClick={onScanBtnClick}
                isScanning={isScanning} />
            <ScannedText text={scannedText} />
        </div>
    )
}