"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import toast from 'react-hot-toast';
import { Button } from "@/components/ui/button"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
    const { setTheme, theme } = useTheme()

    const toggleTheme = () => {
        // toast.success('Successfully theme changed!')
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <nav className="flex justify-between items-center px-8 h-16 bg-primary/90 text-primary-foreground shadow-sm border-b border-white/20 dark:border-b-gray-600/20 backdrop-blur-sm sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight font-serif">
                   WalletWarden
                </span>
            </div>

            <ul className="flex list-none gap-8 items-center justify-center flex-1 max-w-2xl">
                <li className="font-semibold hover:text-primary-foreground/80 transition-colors cursor-pointer px-3 py-1 rounded-lg font-mono">
                    Home
                </li>
                <li className="font-semibold hover:text-primary-foreground/80 transition-colors cursor-pointer px-3 py-1 rounded-lg font-mono">
                    About
                </li>
                <li className="font-semibold hover:text-primary-foreground/80 transition-colors cursor-pointer px-3 py-1 rounded-lg font-mono">
                    Services
                </li>
            </ul>

            <div className="flex items-center gap-4">
                <Button

                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="hover:bg-primary/20 focus-visible:ring-1 focus-visible:ring-primary-foreground/50"
                >
                    <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>

                <Button
                    variant={"secondary"}
                    size="sm"
                    className="text-lg font-bold bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm font-mono"
                >
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </Button>
            </div>
        </nav>
    )
}

export default Navbar