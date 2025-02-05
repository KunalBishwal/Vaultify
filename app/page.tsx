import { AddCard } from "@/components/AddCard"
import { AddPassword } from "@/components/AddPassword"
import { YourCards } from "@/components/YourCards"
import { YourPasswords } from "@/components/YourPasswords"

export default function Home() {
  return (
    <div className="container mx-auto py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <AddCard />
        <AddPassword />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <YourCards />
        <YourPasswords />
      </div>
    </div>
  )
}

