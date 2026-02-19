"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StarButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export function StarButton({ children, href, onClick, className }: StarButtonProps) {
  const content = (
    <motion.span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full group cursor-pointer",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Rotating border */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className="absolute inset-[-100%] animate-star-rotate"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, #FF1F3D 10%, transparent 20%)",
          }}
        />
      </span>

      {/* Inner background */}
      <span className="relative z-10 flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-all group-hover:text-primary m-[1px]">
        {children}
      </span>

      {/* Glow effect on hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "0 0 20px rgba(255, 31, 61, 0.3), 0 0 40px rgba(255, 31, 61, 0.1)",
        }}
      />
    </motion.span>
  )

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return <button onClick={onClick} type="button">{content}</button>
}
