import { AddCard } from "@/components/AddCard"
import { AddPassword } from "@/components/AddPassword"
import { YourCards } from "@/components/YourCards"
import { YourPasswords } from "@/components/YourPasswords"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WalletWarden - Secure Digital Vault Manager",
  description: "Safeguard your digital identity with WalletWarden's ultra-secure vault for passwords, payment cards, and private notes. Enjoy one-click autofill, breach monitoring, and seamless access across all your devices with end-to-end encryption."
}
export default function Home() {
  return (
    <div className="container mx-auto py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <AddCard/>
        <AddPassword />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <YourCards />
        <YourPasswords />
      </div>
    </div>
  )
}

