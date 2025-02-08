import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface CardProps{
  cardNo: string, 
  expiryDate: string, 
  cvv: string,
}

export function YourCards({cards}:{cards:CardProps[]}) {                     
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Cards</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>   
            <TableRow>
              <TableHead>Card Number</TableHead>
              <TableHead>Expiry</TableHead>
              <TableHead>CVV</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cards.map((card:CardProps) => (
              <TableRow key={card.cardNo}>
                <TableCell>{card.cardNo}</TableCell>
                <TableCell>{card.expiryDate}</TableCell>
                <TableCell>{card.cvv}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

