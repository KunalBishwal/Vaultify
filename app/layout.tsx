import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <div>
        </div>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Navbar/>
            <Button>Click me</Button>
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}