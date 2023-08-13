import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./styles.css";
import "./vendor.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frjr17 Portfolio",
  description: "Frjr17 - Hernán Domínguez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* basic page needs */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hudson</title>

        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');
          document.documentElement.classList.add('js');`,
          }}
        ></script>

        {/* favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
