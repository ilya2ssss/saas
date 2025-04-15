import {
    Briefcase,
    Building,
    DoorOpen,
    FileText,
    LayoutDashboard,
    Settings,
    Users,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../ui/sidebar";

const dashboardItem = {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
};

const portfolioGroup = {
    title: "Portfolio",
    items: [
        {
            title: "Properties",
            url: "properties",
            icon: Building,
        },
        {
            title: "Units",
            url: "units",
            icon: DoorOpen,
        },
    ],
};

const peopleGroup = {
    title: "People",
    items: [
        {
            title: "Owners",
            url: "/owners",
            icon: Briefcase,
        },
        {
            title: "Tenants",
            url: "tenants",
            icon: Users,
        },
    ],
};

const leasingGroup = {
    title: "Leasing",
    items: [
        {
            title: "Leases",
            url: "leases",
            icon: FileText,
        },
    ],
};

const sidebarGroups = [portfolioGroup, peopleGroup, leasingGroup];

export function AppSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem key="Cora AI">
                        <SidebarMenuButton asChild>
                            <span className="font-bold text-lg tracking-tight">
                                LOGO PLACEHOLDER
                            </span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {/* Dashboard */}
                <SidebarMenu>
                    <SidebarMenuItem key={dashboardItem.title}>
                        <SidebarMenuButton asChild>
                            <a href={dashboardItem.url}>
                                <dashboardItem.icon />
                                <span>{dashboardItem.title}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                {/* Grouped Items */}
                {sidebarGroups.map((group) => (
                    <SidebarMenu key={group.title}>
                        <span className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {group.title}
                        </span>
                        {group.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem key="Settings">
                        <SidebarMenuButton asChild>
                            <a href="/settings">
                                <Settings />
                                <span>Settings</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
