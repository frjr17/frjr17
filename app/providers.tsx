"use client";

import { ChakraProvider } from "@chakra-ui/react";
import mainTheme from "./styles/mainTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={mainTheme}>{children}</ChakraProvider>;
}
