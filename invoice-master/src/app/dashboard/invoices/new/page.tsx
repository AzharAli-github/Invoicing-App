"use client";
import { Flex } from "@/components/app/directional/Flex";
import { Text } from "@/components/app/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";

interface Invoice {
  id: string;
  name: string;
  email: string;
  value: number;
  description: string;
  date: string;
  status: string;
}

export default function New() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    value: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const invoice: Invoice = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      value: parseFloat(formData.value),
      description: formData.description,
      date: new Date().toISOString(),
      status: "pending",
    };

    // Get existing invoices from localStorage
    const existingInvoices = JSON.parse(localStorage.getItem("invoices") || "[]");

    // Add new invoice
    const updatedInvoices = [...existingInvoices, invoice];

    // Save to localStorage
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));

    alert("Invoice created successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      value: "",
      description: "",
    });
  };

  return (
    <>
      <Text as="h1">Create Invoice</Text>

      <Flex justifyContent={"flex-start"} className="w-full px-9">
        <Flex
          as="form"
          flexDirection={"column"}
          gap={18}
          className="min-w-[425px]"
          onSubmit={handleSubmit}
        >
          <Flex flexDirection={"column"} gap={6}>
            <Label className="font-bold" htmlFor="name">
              Billing Name
            </Label>
            <Input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Flex>
          <Flex flexDirection={"column"}>
            <Label className="font-bold" htmlFor="email">
              Billing Email
            </Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Flex>
          <Flex flexDirection={"column"}>
            <Label className="font-bold" htmlFor="value">
              Value
            </Label>
            <Input
              name="value"
              type="number"
              step="0.01"
              min="0"
              value={formData.value}
              onChange={handleInputChange}
              required
            />
          </Flex>

          <Flex flexDirection={"column"}>
            <Label className="font-bold" htmlFor="description">
              Description
            </Label>
            <Textarea
              name="description"
              rows={10}
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </Flex>

          <Button type="submit">Submit</Button>
        </Flex>
      </Flex>
    </>
  );
}
