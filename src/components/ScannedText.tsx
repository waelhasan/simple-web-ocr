export function ScannedText({ text }: { text: string | undefined }) {
    return !!text ? (
        <div className="
            rounded-[1rem]
            cursor-text
            max-w-[50rem]
            p-[1rem] 
            hover:scale-[1.01]
            duration-75
            bg-[--background-alternate-2]">
            {text}
        </div>
    ) : null
}