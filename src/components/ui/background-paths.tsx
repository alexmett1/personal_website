"use client"

import { motion } from "framer-motion"
import React from "react"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => {
    const baseRadius = 100 + i * 40
    const variance = position * 50
    return {
      id: i,
      d: `M-${baseRadius - variance} ${300 + i * 15}C-${baseRadius / 2 + variance} ${100 + i * 20} ${baseRadius / 3 - variance} ${400 - i * 10} ${baseRadius + variance} ${200 + i * 12}`,
      width: 0.5 + i * 0.03,
      opacity: 0.1 + i * 0.005,
      duration: 20 + i * 0.5,
    }
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgba(255, 31, 61, 0.08)"
            strokeWidth={path.width}
            strokeLinecap="round"
            initial={{ pathLength: 0.3, opacity: 0 }}
            animate={{
              pathLength: [0.3, 0.8, 0.3],
              opacity: [path.opacity * 0.5, path.opacity, path.opacity * 0.5],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

interface BackgroundPathsProps {
  title?: string
  children?: React.ReactNode
}

export function BackgroundPaths({ title, children }: BackgroundPathsProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {title && (
          <motion.h1
            className="text-5xl sm:text-7xl font-bold text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {title}
          </motion.h1>
        )}
        {children}
      </div>
    </div>
  )
}
