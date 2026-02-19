"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"

interface HyperTextProps {
  children: string
  className?: string
  duration?: number
  animateOnLoad?: boolean
}

export function HyperText({
  children,
  className,
  duration = 800,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(children)
  const [isAnimating, setIsAnimating] = useState(false)
  const iterationRef = useRef(0)

  const animate = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    iterationRef.current = 0

    const text = children
    const interval = setInterval(() => {
      iterationRef.current += 1
      const progress = iterationRef.current / (duration / 30)

      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            if (i / text.length < progress) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )

      if (progress >= 1) {
        clearInterval(interval)
        setDisplayText(text)
        setIsAnimating(false)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [children, duration, isAnimating])

  useEffect(() => {
    if (animateOnLoad) {
      animate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span
      className={cn("font-mono inline-block", className)}
      onMouseEnter={animate}
    >
      {displayText}
    </span>
  )
}
