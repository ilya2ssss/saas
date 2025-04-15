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

const portfolioItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Owners",
        url: "/owners",
        icon: Briefcase,
    },
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
    {
        title: "Leases",
        url: "leases",
        icon: FileText,
    },
    {
        title: "Tenants",
        url: "tenants",
        icon: Users,
    },
];

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
                    {portfolioItems.map((item) => (
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
