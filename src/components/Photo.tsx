"use client"

import { useRef, useState } from "react"
import Tesseract, { ImageLike } from "tesseract.js"
import { ErrorToast } from "./ErrorToast"
import { ExtractedText } from "./ExtractedText"
import { LanguagesMenu } from "./LanguagesMenu"
import { Buttons } from "./Buttons"
import { PhotoArea } from "./PhotoArea"

const defaultImageLang = "eng"

export const Photo = () => {
    const photoRef = useRef<HTMLInputElement>()
    const photoPreviewRef = useRef<HTMLImageElement>()
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [isExtracting, setIsExtracting] = useState(false)
    const [isFailure, setIsFailure] = useState(false)
    const [photoData, setPhotoData] = useState<ImageLike>()
    const [extractedText, setExtractedText] = useState<string>()
    const [imageLang, setImageLang] = useState<string>(defaultImageLang)

    function onClearBtnClick() {
        !!photoRef.current && (photoRef.current.value = "")
        photoPreviewRef.current!.src = ""
        setIsImageSelected(false)
        setExtractedText("")
        setImageLang(defaultImageLang)
    }

    async function onExtractBtnClick() {
        if (!isImageSelected) return setIsFailure(true)
        setIsExtracting(true)
        // Extrtact the text
        if (!!photoData) {
            const result = await Tesseract.recognize(photoData, imageLang)
            setExtractedText(result.data.text)
            setIsExtracting(false)
        }
    }

    function setPhotoFromFile(file: File) {
        if (FileReader && file) {
            const fr = new FileReader()
            fr.onload = () => !!fr.result && (photoPreviewRef.current!.src = fr.result as any)
            fr.readAsDataURL(file)
            setPhotoData(file)
            setIsImageSelected(true)
        }
    }

    async function onPhotoChange(evt: any) {
        const tgt = evt.target
        const files = tgt.files
        setPhotoFromFile(files?.[0])
    }

    return (
        <div className="flex-[2] flex flex-col gap-[1rem] items-center w-fit mb-[1rem]">
            <ErrorToast isFailure={isFailure} setIsFailure={setIsFailure} />
            <PhotoArea
                photoRef={photoRef}
                photoPreviewRef={photoPreviewRef}
                isImageSelected={isImageSelected}
                isExtracting={isExtracting}
                setPhotoFromFile={setPhotoFromFile} />
            <LanguagesMenu
                isImageSelected={isImageSelected}
                isExtracting={isExtracting}
                language={imageLang}
                setLanguage={setImageLang} />
            <input
                id="photo"
                type="file"
                className="hidden"
                multiple={false}
                accept="image/*"
                onChange={onPhotoChange}
                ref={photoRef as any}
                disabled={isExtracting} />
            <Buttons
                isImageSelected={isImageSelected}
                onClearBtnClick={onClearBtnClick}
                onExtractBtnClick={onExtractBtnClick}
                isExtracting={isExtracting} />
            <ExtractedText text={extractedText} />
        </div>
    )
}