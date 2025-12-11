import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ocebots 9033 | FIRST Robotics Competition Team",
  description: "Ocebots team 9033 - Inspiring a new generation of STEM leaders through FIRST Robotics Competition. Learn about our robots, outreach programs, and team activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
