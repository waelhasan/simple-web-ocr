const Li = ({ text }: { text: string }) => (
    <li className="list-[circle]">
        <h2>{text}</h2>
    </li>
)

export function HowToUse() {
    return (
        <ul className="flex-1 p-[2rem] text-[1.5rem]">
            <Li text="Select a photo, by clicking on the preview area, or dropping a photo on it" />
            <Li text="Select the language of the text inside the photo" />
            <Li text="Click `Extract` button to start the text extraction process" />
            <Li text="Click `Clear` to clear photo and data" />
        </ul>
    )
}