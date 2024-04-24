import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Picto Movie",
  description: "..."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
