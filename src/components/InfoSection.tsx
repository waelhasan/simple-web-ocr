import { HiMiniInformationCircle } from "react-icons/hi2"
import { FaGithub } from "react-icons/fa"

const InfoIcon = () =>
    <span className="absolute top-0 left-0 translate-y-1 -translate-x-4 bg-[--foreground] rounded-full">
        <HiMiniInformationCircle className="text-[2rem] text-[--golden]" />
    </span>

const Li = ({ children }: { children: React.ReactNode }) => (
    <li className="list-[circle]">
        <span>{children}</span>
    </li>
)

const Term = ({ children }: { children: React.ReactNode }) =>
    <span className="text-orange-500">{children}</span>

const Brief = () =>
    <>
        This is a simple OCR web App, built using <Term>Reactjs</Term>, <Term>Nextjs</Term>, and <Term>Tesseract.js</Term>.
        The accuracy of the results depends mainly on the quality of the image contents, e.g. if the image is generated by scanning a document
        using a digital scanner, then it&apos;s quality will be higher, suth the extracted text will be more accurate, while an image generated using
        a phone cam may not have the same quality, leading to less text accuracy.
    </>

const HowToUseApp = () =>
    <>
        <strong>How to use it:</strong>
        <ul className="flex-1">
            <Li>
                Select a photo, by clicking on the preview area, or dropping a photo on it
            </Li>
            <Li>
                Select the language of the text inside the photo, using the drop down menu (this will be used to configure the <Term>Tesseract</Term> worker)
            </Li>
            <Li>
                Click <Term>Extract</Term> button to start the text extraction process
            </Li>
            <Li>
                Click <Term>Clear</Term> to clear photo and data
            </Li>
        </ul>
    </>

const Footer = () =>
    <div className="p-[1rem] border-[1px] border-dashed border-[--foreground] bg-[--background] text-center">
        You can find the source code of this App on
        <br />
        <a href="https://github.com/waelhasan/abga-assessment" target="_blank" className="block mt-1">
            <FaGithub className="text-[3rem] mx-auto hover:scale-[1.1] hover:text-[--golden] duration-150" />
        </a>
    </div>

export function InfoSection() {
    return (
        <div className="
            flex-1 
            relative
            p-[3rem] 
            text-[1.3rem] text-justify
            border-solid border-[--golden] border-l-[2px]
            bg-[--background-alternate-2]">
            <InfoIcon />
            <Brief />
            <br />
            <br />
            <HowToUseApp />
            <br />
            <Footer />
        </div>
    )
}