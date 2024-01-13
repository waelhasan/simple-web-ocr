import type { Metadata } from 'next'
import { Photo } from "@/components/Photo"
import { HowToUse } from "@/components/HowToUse"

 
export const metadata: Metadata = {
  title: 'Simple OCR',
  description: 'Extract textual information from photos easily.',
}

export default function Home() {
  return (
    <main className="
      flex flex-col lg:flex-row items-center justify-evenly 
      max-w-[110rem] min-h-screen 
      p-[1rem] mx-auto">
      <HowToUse />
      <Photo />
    </main>
  )
}
