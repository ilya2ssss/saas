import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { cookies } from "next/headers";

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
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1" />
                                <Separator
                                    orientation="vertical"
                                    className="mr-2 h-4"
                                />
                            </div>
                        </header>
                        <main>{children}</main>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
