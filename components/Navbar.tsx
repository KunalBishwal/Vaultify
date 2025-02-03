"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
    const { setTheme } = useTheme()

    return (
        <nav className="flex justify-between items-center px-8 h-16 bg-primary text-primary-foreground shadow-sm border-b dark:border-b-gray-800 sticky top-0 z-50">

            <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight font-serif">
                    VAULTIFY
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-primary/20 focus-visible:ring-1 focus-visible:ring-primary-foreground/50"
                        >
                            <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="bg-popover text-popover-foreground border border-gray-100 dark:border-gray-800"
                    >
                        <DropdownMenuItem
                            onClick={() => setTheme("light")}
                            className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
                        >
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setTheme("dark")}
                            className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
                        >
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setTheme("system")}
                            className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
                        >
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar