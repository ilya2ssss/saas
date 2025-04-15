import {
  Briefcase,
  Building,
  DoorOpen,
  FileText,
  LayoutDashboard,
} from "lucide-react";
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
} from "../ui/sidebar";

// Portfolio menu portfolioItems
// TODO: Add Dashboard
const portfolioItems = [
  {
    title: "Owners",
    url: "#",
    icon: Briefcase,
  },
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
  {
    title: "Leases",
    url: "#",
    icon: FileText,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />

      <SidebarContent>
        {/* Dashboard */}
        <SidebarMenu>
          <SidebarMenuItem key="Dashboard">
            <SidebarMenuButton asChild>
              <a href="#">
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
  );
}
