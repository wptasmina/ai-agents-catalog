import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ReduxProvider } from "@/components/providers/redux-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArkLab AI Agents Catalog",
  description:
    "Discover and explore our comprehensive catalog of AI agents for various business needs including customer service, marketing, development, and more.",
  keywords: "AI agents, artificial intelligence, automation, business tools, customer service, marketing",
  authors: [{ name: "ArkLab" }],
  openGraph: {
    title: "ArkLab AI Agents Catalog",
    description: "Discover and explore our comprehensive catalog of AI agents for various business needs.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
         attribute="class"
         defaultTheme="system" 
         enableSystem 
         disableTransitionOnChange
         >
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
