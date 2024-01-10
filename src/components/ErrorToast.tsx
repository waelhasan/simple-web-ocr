import { useEffect, useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"

export function ErrorToast({ isFailure, setIsFailure }: {
    isFailure: boolean,
    setIsFailure: (v: boolean) => void
}) {
    const [isVisible, setIsVisible] = useState<boolean>(isFailure)

    useEffect(() => {
        setIsVisible(isFailure)
        isFailure && setTimeout(() => setIsFailure(false), 3000)
    })

    const onCloseIconClick = () => setIsFailure(false)

    return !isVisible ? null : (
        <div className="
            fixed bottom-[2rem] right-[2rem]
            w-fit 
            bg-[--background-danger]
            p-[2rem] 
            rounded-[2rem]
        ">
            Something went wrong, please try again later.
            <IoIosCloseCircleOutline onClick={onCloseIconClick} className="
                absolute top-[-1rem] right-[-1rem] 
                text-[2rem] 
                cursor-pointer
            "/>
        </div>
    )
}