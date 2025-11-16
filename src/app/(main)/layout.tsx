import Footer from "@/components/footer";
import HeroNavigation from "@/components/HeroNavigation";
import { LivePreview } from "@/components/LivePreview";
import "../globals.css";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LivePreview />
            <HeroNavigation />
            {children}
            <Footer />
        </>
    );
}
