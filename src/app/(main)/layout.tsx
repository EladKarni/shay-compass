import type { Metadata } from "next";
import { Didact_Gothic } from "next/font/google";
import Footer from "@/components/footer";
import HeroNavigation from "@/components/HeroNavigation";
import { LivePreview } from "@/components/LivePreview";
import "../globals.css";

const didactGothic = Didact_Gothic({
  subsets: ["latin"],
  variable: '--font-didact-gothic',
  display: 'swap',
  weight: "400"
});

export const metadata: Metadata = {
  title: "Shay Compass | Premier Real Estate Development & Property Solutions",
  description: "Shay Compass specializes in residential and commercial property development, real estate investment, and comprehensive property management solutions. Transform your vision into reality with our expert team.",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light" suppressHydrationWarning>
            <body className={`${didactGothic.variable}`}>
                <LivePreview />
                <HeroNavigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
