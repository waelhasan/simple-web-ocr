import type { Metadata } from 'next'
import { Photo } from "@/components/Photo"
import { HowToUse } from "@/components/HowToUse"

 
export const metadata: Metadata = {
  title: 'Simple OCR',
  description: 'Extract textual information from photos easily.',
}
 

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-evenly p-[1rem]">
      <HowToUse />
      <Photo />
    </main>
  )
}
