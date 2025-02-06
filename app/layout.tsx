import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {Toaster} from 'react-hot-toast';
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
            <Navbar />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}