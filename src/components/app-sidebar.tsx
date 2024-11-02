"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { Episode } from "@/lib/types";

export function AppSidebar() {
  const [epList, setEpList] = useState([]);
  const activeEpisode = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
      );
      setEpList(response.data.results);
    };
    fetchEpisodes();
  }, []);

  const handleEpisodeClick = (id: string) => {
    if (activeEpisode === `/episode/${id}`) {
      router.push(`/`);
    } else {
      router.push(`/episode/${id}`);
    }
  };

  return (
    <Sidebar className="">
      <SidebarHeader className="text-2xl font-bold p-4 text-center">
        Episodes
      </SidebarHeader>
      <SidebarContent className="space-y-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {epList.map((item: Episode) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <button
                      className={`${
                        activeEpisode === `/episode/${item.id}`
                          ? "font-bold text-sidebar-primary-foreground bg-sidebar-primary hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                          : ""
                      }`}
                      onClick={() => handleEpisodeClick(item.id.toString())}
                    >
                      <span className={``}>{item.name}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
