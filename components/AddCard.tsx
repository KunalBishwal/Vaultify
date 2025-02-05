"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CreditCard, User, CalendarDays, Lock } from "lucide-react"

export function AddCard() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Card submitted:", { cardNumber, cardName, expiryDate, cvv })
    setIsSubmitted(true)
    setCardNumber("")
    setCardName("")
    setExpiryDate("")
    setCvv("")
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
          <CreditCard className="w-6 h-6 text-primary" />
          <span>Add Payment Method</span>
        </CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {/* Card Number */}
            <div className="relative">
              <Label htmlFor="cardNumber" className="text-sm font-medium text-muted-foreground">
                Card Number
              </Label>
              <div className="relative mt-1">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                  className="pl-10 tracking-widest"
                  maxLength={19}
                  pattern="\d{16}"
                  required
                />
              </div>
            </div>

            {/* Card Holder Name */}
            <div className="relative">
              <Label htmlFor="cardName" className="text-sm font-medium text-muted-foreground">
                Name on Card
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Expiry and CVV */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Label htmlFor="expiryDate" className="text-sm font-medium text-muted-foreground">
                  Expiry Date
                </Label>
                <div className="relative mt-1">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "")
                      let formatted = value
                      if (value.length > 2) {
                        formatted = `${value.slice(0, 2)}/${value.slice(2, 4)}`
                      }
                      setExpiryDate(formatted)
                    }}
                    className="pl-10"
                    maxLength={5}
                    required
                  />
                </div>
              </div>

              <div className="relative flex-1">
                <Label htmlFor="cvv" className="text-sm font-medium text-muted-foreground">
                  CVV
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="cvv"
                    type="password"
                    placeholder="•••"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
                    className="pl-10"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button type="submit" className="w-full gap-2" size="lg">
            {isSubmitted ? (
              <>
                <Lock className="w-5 h-5" />
                Card Secured!
              </>
            ) : (
              "Save Payment Method"
            )}
          </Button>
          
          {isSubmitted && (
            <p className="text-sm text-green-600 text-center animate-fade-in">
              Payment method securely stored
            </p>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}