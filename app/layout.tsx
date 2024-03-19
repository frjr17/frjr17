import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { firaCode } from "./styles/fonts";
import { Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Frjr17",
  description: "Frjr17 Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
