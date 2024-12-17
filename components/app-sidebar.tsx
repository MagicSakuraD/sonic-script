import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { SidebarLyricsForm } from "@/components/sidebar-opt-in-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      items: "Chinese Style",
    },
    {
      title: "J-POP",
      url: "#",
      items: "Japanese Style",
    },
    {
      title: "K-POP",
      url: "#",
      items: "Korean Style",
    },
    {
      title: "V-POP",
      url: "#",
      items: "Vietnamese Style",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">SonicScript</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarLyricsForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
