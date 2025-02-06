"use client";

import { useState } from "react";
import toast from 'react-hot-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CreditCard, User, CalendarDays, Lock } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  cardNumber: z
    .string()
    .length(16, { message: "Card number must be 16 digits" })
    .refine((num) => {
      const digits = num.split("").map(Number);
      let sum = 0;
      let isEven = false;
      for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        if (isEven) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
        isEven = !isEven;
      }
      return sum % 10 === 0;
    }, { message: "Invalid card number" }),

  cardName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50)
    .regex(/^[a-zA-Z\s]+$/)
    .refine((val) => val.includes(" "), "Enter first and last name"),

  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)
    .superRefine((val, ctx) => {
      const [month, year] = val.split("/").map(Number);
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Card has expired",
        });
      }
      if (year > currentYear + 10) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Expiry date is too far in the future",
        });
      }
    }),

  cvv: z.string().length(3, "CVV must be 3 digits"),
});

export function AddCard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { cardNumber: "", cardName: "", expiryDate: "", cvv: "" },
  });

  const formatCardNumber = (value: string): string => {
    return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string): string => {
    const nums = value.replace(/\D/g, "").slice(0, 4);
    if (nums.length <= 2) return nums;
    return `${nums.slice(0, 2)}/${nums.slice(2, 4)}`;
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Card submitted:", data);
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
    toast.success('Card Added !')
    // console.log(data)
  };

  return (
    <Card className="w-full max-w-2xl shadow-lg bg-white/30 dark:bg-gray-900/30 border border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-primary" />
          <span>Add Payment Method</span>
        </CardTitle>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {/* Card Number Field */}
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Card Number</FormLabel>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <FormControl>
                      <Input
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="pl-10 tracking-widest"
                        value={formatCardNumber(field.value)}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/\D/g, "").slice(0, 16);
                          field.onChange(rawValue);
                        }}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="dark:text-white" />
                </FormItem>
              )}
            />

            {/* Card Name Field */}
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Name on Card</FormLabel>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <FormControl>
                      <Input
                        placeholder="Enter your first and last name"
                        className="pl-10"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="dark:text-white" />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              {/* Expiry Date Field */}
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="dark:text-white">Expiry Date</FormLabel>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                        <Input
                          placeholder="MM/YY"
                          className="pl-10"
                          value={formatExpiry(field.value)}
                          onChange={(e) => {
                            const formatted = formatExpiry(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="dark:text-white" />
                  </FormItem>
                )}
              />

              {/* CVV Field */}
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="dark:text-white">CVV</FormLabel>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="•••"
                          className="pl-10"
                          {...field}
                          maxLength={3}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="dark:text-white" />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full gap-2" size="lg">
              {isSubmitted ? "Card Secured!" : "Add Card"}
              
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}