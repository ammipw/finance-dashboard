import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SideMenu, ThemeProvider } from "@/components"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Finance Dashboard",
  description: "Manage your finances effectively",
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <SideMenu />
            <main className="flex-1">
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
