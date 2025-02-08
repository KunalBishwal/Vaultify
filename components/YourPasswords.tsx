import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Globe, User, KeyRound, Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the data type for each credential.
interface PasswordData {
  id: number;
  website: string;
  username: string;
}

// Define the props interface. The prop "passwords" is optional.
interface YourPasswordsProps {
  passwords?: PasswordData[];
}

export function YourPasswords({ passwords }: YourPasswordsProps) {
  // If no passwords prop is passed, use default credentials.
  const data: PasswordData[] =
    passwords || [
      { id: 1, website: "example.com", username: "johndoe" },
      { id: 2, website: "anothersite.com", username: "janesmith" },
    ];

  return (
    <Card className="w-full max-w-2xl shadow-lg hover:shadow-xl transition-shadow backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-600/20 glass-card dark:glass-card-dark">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <KeyRound className="w-6 h-6 text-primary" />
          <span>Saved Credentials</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[40%]">Website</TableHead>
              <TableHead className="w-[40%]">Username</TableHead>
              <TableHead className="w-[20%] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((credential) => (
              <TableRow key={credential.id} className="group hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{credential.website}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>{credential.username}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
