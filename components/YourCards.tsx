// YourCards.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Lock, Trash2, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

const cards = [
  { id: 1, name: "John Doe", number: "1234", expiry: "12/24" },
  { id: 2, name: "Jane Smith", number: "5678", expiry: "06/25" },
]

export function YourCards() {
  return (
    // YourPasswords.tsx and YourCards.tsx
<Card className="w-full max-w-2xl shadow-lg hover:shadow-xl transition-shadow backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-600/20 glass-card dark:glass-card-dark">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-primary" />
          <span>Saved Payment Methods</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
        <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[35%]">Card Holder</TableHead>
              <TableHead className="w-[35%]">Card Number</TableHead>
              <TableHead className="w-[20%]">Expiry</TableHead>
              <TableHead className="w-[10%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cards.map((card) => (
              <TableRow key={card.id} className="group hover:bg-muted/50">
                <TableCell className="font-medium">{card.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                    <span className="tracking-wider font-mono">**** **** **** {card.number}</span>
                  </div>
                </TableCell>
                <TableCell>{card.expiry}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}