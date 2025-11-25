import Footer from "@/components/footer";
import HeroNavigation from "@/components/HeroNavigation";
import { LivePreview } from "@/components/LivePreview";
import "../globals.css";
import { Didact_Gothic } from "next/font/google";

const didactGothic = Didact_Gothic({
  subsets: ["latin"],
  variable: '--font-didact-gothic',
  display: 'swap',
  weight: "400"
});

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
