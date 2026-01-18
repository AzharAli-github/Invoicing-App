import { Flex } from "@/components/app/directional/Flex";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Flex
      as={"section"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      gap={12}
      alignItems={"center"}
      className="w-screen h-screen py-8"
    >
      {children}
    </Flex>
  );
}
