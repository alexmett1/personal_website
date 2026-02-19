"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: User },
  { name: "Experience", url: "/experience", icon: Briefcase },
  { name: "Projects", url: "/projects", icon: FolderOpen },
  { name: "Contact", url: "/contact", icon: Mail },
]

interface NavBarProps {
  className?: string
}

export function NavBar({ className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  return (
    <nav
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2",
        "top-6 md:top-6 bottom-auto",
        "max-md:top-auto max-md:bottom-6",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-white/80 border border-border backdrop-blur-lg py-1.5 px-2 rounded-full shadow-lg shadow-black/5">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.url

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.url)}
              className={cn(
                "relative px-3 py-2 rounded-full text-sm font-medium transition-all",
                "flex items-center gap-2 hover:-translate-y-[1px]",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(255, 31, 61, 0.06)",
                    boxShadow: "0 0 12px rgba(255, 31, 61, 0.12), 0 0 25px rgba(255, 31, 61, 0.18), inset 0 1px 0 rgba(255, 31, 61, 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {isActive && (
                <motion.div
                  layoutId="tubelight-glow"
                  className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary"
                  style={{
                    boxShadow: "0 0 8px rgba(255, 31, 61, 0.5), 0 0 20px rgba(255, 31, 61, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <Icon size={18} />
              </span>
              <span className="relative z-10 hidden md:inline">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
