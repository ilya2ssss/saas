"use client";

import { LucideIcon } from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon: LucideIcon;
    }[];
}) {
    return (
        <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                        <Link href={item.url}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
}
