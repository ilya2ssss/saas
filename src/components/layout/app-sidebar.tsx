import {
    Briefcase,
    Building,
    DoorOpen,
    FileText,
    LayoutDashboard,
} from 'lucide-react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../ui/sidebar'

const portfolioItems = [
    {
        title: 'Owners',
        url: '/owners',
        icon: Briefcase,
    },
    {
        title: 'Properties',
        url: 'properties',
        icon: Building,
    },
    {
        title: 'Units',
        url: 'units',
        icon: DoorOpen,
    },
    {
        title: 'Leases',
        url: 'leases',
        icon: FileText,
    },
]

export function AppSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem key="Cora AI">
                        <SidebarMenuButton asChild>
                            <span>LOGO PLACEHOLDER</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {/* Dashboard */}
                <SidebarMenu>
                    <SidebarMenuItem key="Dashboard">
                        <SidebarMenuButton asChild>
                            <a href="/dashboard">
                                <LayoutDashboard />
                                <span>Dashboard</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                {/* Portfolio */}
                <SidebarGroup>
                    <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
                    <SidebarGroupContent>
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
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    )
}
