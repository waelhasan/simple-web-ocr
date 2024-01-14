import { HiMiniInformationCircle } from "react-icons/hi2"

const Li = ({ children }: { children: any }) => (
    <li className="list-[circle]">
        <h2>{children}</h2>
    </li>
)

const Term = ({ children }: { children: any }) => <span className="text-orange-500">{children}</span>

export function HowToUse() {
    return (
        <div className="flex-1 relative">
            <span className="absolute translate-y-1 -translate-x-4 bg-[--foreground] rounded-full">
            <HiMiniInformationCircle className="text-[2rem] text-[--golden]" />
            </span>
            <ul className="
                flex-1 
                p-[2rem] 
                text-[1.5rem] text-justify
                border-solid border-[--golden] border-l-[2px]
                bg-[--background-alternate-2]">
                <Li>
                    Select a photo, by clicking on the preview area, or dropping a photo on it
                </Li>
                <Li>
                    Select the language of the text inside the photo, using the drop down menu
                </Li>
                <Li>
                    Click <Term>Extract</Term> button to start the text extraction process
                </Li>
                <Li>
                    Click <Term>Clear</Term> to clear photo and data
                </Li>
            </ul>
        </div>
    )
}