import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'

export const metadata: Metadata = {
  title: "Ministry of Water Resources",
  description: "The Ministry of Water Resources in Imo State is responsible for overseeing and developing the state's water sector, as well as managing its water resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
