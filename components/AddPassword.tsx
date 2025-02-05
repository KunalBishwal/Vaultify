"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Globe, User, KeyRound, CheckCircle2 } from "lucide-react"

export function AddPassword() {
  const [website, setWebsite] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Password submitted:", { website, username, password })
    
    // Show success feedback
    setIsSubmitted(true)
    setWebsite("")
    setUsername("")
    setPassword("")
  }

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  return (
   
<Card className="w-full max-w-2xl shadow-lg hover:shadow-xl transition-shadow backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-600/20 glass-card dark:glass-card-dark">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyRound className="w-6 h-6 text-primary" />
          <span>Add New Password</span>
        </CardTitle>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="website" className="text-sm font-medium text-muted-foreground">
                Website
              </Label>
              <div className="relative mt-1">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="website"
                  placeholder="https://example.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="username" className="text-sm font-medium text-muted-foreground">
                Username/Email
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="username"
                  placeholder="johndoe@example.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                Password
              </Label>
              <div className="relative mt-1">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button type="submit" className="w-full gap-2" size="lg">
            {isSubmitted ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Password Added!
              </>
            ) : (
              "Save Password"
            )}
          </Button>
          
          {isSubmitted && (
            <p className="text-sm text-green-600 text-center animate-fade-in">
              Password securely stored
            </p>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}