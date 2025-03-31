import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { MainSidebar } from "@/components/main-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "國立陽明交通大學閃耀魔眼社",
  description: "國立陽明交通大學閃耀魔眼社官方網站",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="zh-TW">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <SidebarProvider>
          <div className="flex flex-col min-h-screen w-full">
            <MainSidebar />
            <main className="flex-1 w-full">{children}</main>
          </div>
        </SidebarProvider>
      </ThemeProvider>
      </body>
      </html>
  )
}

