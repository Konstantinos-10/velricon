"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/layout/Footer";

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isStudio = pathname?.startsWith("/studio");

    return (
        <>
            {!isStudio && <Header />}
            <main className="min-h-screen">
                {children}
            </main>
            {!isStudio && <Footer />}
        </>
    );
}
