import { Photo } from "@/components/Photo"
import { HowToUse } from "@/components/HowToUse"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-evenly p-[1rem]">
      <HowToUse />
      <Photo />
    </main>
  )
}
