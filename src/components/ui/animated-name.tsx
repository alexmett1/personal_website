"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedNameProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedName({ children, className }: AnimatedNameProps) {
  return (
    <motion.h1
      className={cn(className)}
      initial={{ opacity: 0, letterSpacing: "-0.04em", y: 12 }}
      animate={{ opacity: 1, letterSpacing: "-0.02em", y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.h1>
  )
}
