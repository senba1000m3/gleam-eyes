"use client"

import { Home, Users, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

export function MainSidebar() {
    const pathname = usePathname()

    const menuItems = [
        {
            title: "首頁",
            icon: Home,
            href: "/",
        },
        {
            title: "成員",
            icon: Users,
            href: "/members",
        },
        {
            title: "章程",
            icon: FileText,
            href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            external: true,
        },
    ]

    return (
        <Sidebar variant="floating" collapsible="none" className="border-b w-full">
            <SidebarHeader className="flex items-center justify-between p-5">
                <h1 className="text-3xl font-bold text-yellow-100"> NYCU 閃耀魔眼社</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="flex flex-row items-center justify-center gap-10 p-3 w-full">
                    {menuItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={item.external ? false : pathname === item.href}
                                className="flex items-center gap-2 px-4"
                            >
                                {item.external ? (
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </a>
                                ) : (
                                    <Link href={item.href}>
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </Link>
                                )}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}

