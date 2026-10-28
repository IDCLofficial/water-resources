export const dynamic = 'force-dynamic'

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
      <head>
        <script
          src="https://pulse-track.onrender.com/tracker.min.js"
          data-key="pk_live_5ed2ee0ab18c62d950ff513b"
          defer
        />
      </head>
      <body>
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
