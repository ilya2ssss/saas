import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

// TODO: Complete metadata
export const metadata: Metadata = {
    title: "Cora · AI management workers for your properties",
    description: "AI at the service of property managers, ...",
    authors: [{ name: "...", url: "..." }],
    keywords: [],
    robots: "",
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <main>{children}</main>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
