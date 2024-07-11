import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./component/header";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perumahan Bumi Kuring",
  description: "Peumahan Bumi Kuring by mochamad ilyas al gifari",
  icons : {
    icon: ['/favicon.ico?=4'],
    apple: ['/logo-bumi-kuring.png?v=4'],
    shortcut: ['/logo-bumi-kuring.png']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
