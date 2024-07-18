import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Queue Visualization",
  description: "Queue Visualization",
  authors: [
    { name: "Alvi Dervishaj", url: "https://alvi-portfolio.vercel.app" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <main className="w-full h-full transition-all duration-500 ease-in-out">
          {children}
        </main>
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
