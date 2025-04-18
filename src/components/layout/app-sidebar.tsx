"use client";

import * as React from "react";

import {
    AudioWaveform,
    Briefcase,
    Building,
    Clipboard,
    Command,
    DoorOpen,
    FileText,
    GalleryVerticalEnd,
    KeyRound,
    Landmark,
    LayoutDashboard,
    LifeBuoy,
    Send,
    Settings,
    Tags,
    UserCheck,
    UsersRound,
    Wrench,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import { ClientSwitcher } from "@/components/layout/client-switcher";
import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import { NavSecondary } from "@/components/layout/nav-secondary";

const data = {
    user: {
        name: "ilya2s",
        email: "ilya2s@example.com",
        avatar: "/avatars/ilya2s.jpg",
    },
    clients: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            type: "Company",
        },
        {
            name: "Jhon Doe",
            logo: AudioWaveform,
            type: "Person",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            type: "Company",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Portfolio",
            url: "#",
            icon: Landmark,
            isActive: true,
            items: [
                {
                    title: "Properties",
                    url: "#",
                    icon: Building,
                },
                {
                    title: "Units",
                    url: "#",
                    icon: DoorOpen,
                },
            ],
        },
        {
            title: "Leasing",
            url: "#",
            icon: KeyRound,
            items: [
                {
                    title: "Applications",
                    url: "#",
                    icon: Clipboard,
                },
                {
                    title: "Screenings",
                    url: "#",
                    icon: UserCheck,
                },
                {
                    title: "Listings",
                    url: "#",
                    icon: Tags,
                },
                {
                    title: "Leases",
                    url: "#",
                    icon: FileText,
                },
            ],
        },
        {
            title: "People",
            url: "#",
            icon: UsersRound,
            items: [
                {
                    title: "Owners",
                    url: "#",
                    icon: Briefcase,
                },
                {
                    title: "Tenants",
                    url: "#",
                    icon: UsersRound,
                },
                {
                    title: "Service Pros",
                    url: "#",
                    icon: Wrench,
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "/",
            icon: Settings,
        },
        {
            title: "Support",
            url: "/",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "/",
            icon: Send,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <ClientSwitcher clients={data.clients} />
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
