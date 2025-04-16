"use client";

import * as React from "react";

import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd,
    KeyRound,
    Landmark,
    LayoutDashboard,
    LifeBuoy,
    Send,
    Settings2,
    UsersRound,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "../ui/sidebar";
import { ClientSwitcher } from "./client-switcher";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { NavSecondary } from "./nav-secondary";

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
            url: "#",
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
                },
                {
                    title: "Units",
                    url: "#",
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
                },
                {
                    title: "Screenings",
                    url: "#",
                },
                {
                    title: "Listings",
                    url: "#",
                },
                {
                    title: "Leases",
                    url: "#",
                },
            ],
        },
        {
            title: "People",
            url: "#",
            icon: UsersRound,
            items: [
                {
                    title: "Landlords",
                    url: "#",
                },
                {
                    title: "Tenants",
                    url: "#",
                },
                {
                    title: "Service Pros",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
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
