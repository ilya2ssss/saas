import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { cookies } from "next/headers";
import { AppHeader } from "@/components/layout/app-header";

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar variant="inset" />
                    <SidebarInset>
                        <AppHeader />
                        <main>{children}</main>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
