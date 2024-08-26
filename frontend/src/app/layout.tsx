import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Toaster } from '@/components/ui/toaster';
import { WalletProvider } from "@/components/WalletProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aptolize",
  description: "Captilize on Aptos with Aptolize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clsx(dmSans.className, "antialiased")} bg-black h-screen`}>
        <WalletProvider>
          <Banner />
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Toaster />
        </WalletProvider>
      </body>
    </html>
  );
}
