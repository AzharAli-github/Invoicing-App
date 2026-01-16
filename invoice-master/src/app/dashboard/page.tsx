"use client";
import { Flex } from "@/components/app/directional/Flex";
import { Text } from "@/components/app/Text";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Metadata } from "next/types";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Invoice {
  id: string;
  name: string;
  email: string;
  value: number;
  description: string;
  date: string;
  status: string;
}

export default function Dashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    // Load invoices from localStorage
    const storedInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    setInvoices(storedInvoices);
  }, []);
  return (
    <>
      <Text as="h1">Dashboard</Text>
      <Flex flexDirection={"column"} className="w-full">
        <Flex
          flexDirection={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Button asChild variant={"ghost"}>
            <Link href={"/dashboard/invoices/new"}>
              <PlusCircle /> Create New Invoice
            </Link>
          </Button>
        </Flex>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No invoices found. Create your first invoice!
                </TableCell>
              </TableRow>
            ) : (
              invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">
                    {new Date(invoice.date).toDateString()}
                  </TableCell>
                  <TableCell>{invoice.name}</TableCell>
                  <TableCell>{invoice.email}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell className="text-right">
                    ${invoice.value.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Flex>
    </>
  );
}
