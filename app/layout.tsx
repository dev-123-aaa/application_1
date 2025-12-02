import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ParticleBackground } from "@/components/layout/ParticleBackground";
import { AppProvider } from "@/components/providers/AppProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cartoonolgy Studio",
  description: "Production command center for SpongeBob YouTube content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] min-h-screen`}
      >
        <ParticleBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <AppProvider>{children}</AppProvider>
        </div>
      </body>
    </html>
  );
}
