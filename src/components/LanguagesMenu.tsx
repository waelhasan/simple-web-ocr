export function LanguagesMenu({
    language,
    setLanguage,
    isScanning,
    isImageSelected
}: {
    language: string,
    setLanguage: (lang: string) => void
    isScanning: boolean
    isImageSelected: boolean
}) {
    return (
        <span>
            <span className="p-[1rem]">
                Language of the text in the image
            </span>
            <select
                disabled={isScanning || !isImageSelected}
                onChange={e => setLanguage(e.target.value)}
                value={language}
                className="
                inline-block
                rounded-[1rem]
                border-transparent 
                    hover:border-[--background-alternate-2]
                    disabled:border-transparent
                duration-75
                bg-[--active] hover:bg-[--active-alternate] disabled:bg-gray-500
                py-[0.5rem] px-[1rem]
                cursor-pointer
                outline-none
                h-full">
                <option value="eng">English</option>
                <option value="ara">Arabic</option>
                <option value="ara+eng">Both</option>
            </select>
        </span>
    )
}
