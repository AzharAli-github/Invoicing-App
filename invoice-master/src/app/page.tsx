import { Flex } from "@/components/app/directional/Flex";
import { Text } from "@/components/app/Text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      as={"main"}
      flexDirection="column"
      gap={12}
      alignItems="center"
      justifyContent="center"
      className="h-screen w-screen"
    >
      <Text as="h1">Invoice App</Text>
      <Button asChild>
        <Link href={"/dashboard"}>Dashboard</Link>
      </Button>
    </Flex>
  );
}
