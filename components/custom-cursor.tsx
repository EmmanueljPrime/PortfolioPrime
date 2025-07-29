"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const [isPointer, setIsPointer] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)

        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })

            // Vérifier si le curseur est sur un élément cliquable
            const target = e.target as HTMLElement
            const isTargetPointer = window.getComputedStyle(target).cursor === "pointer"
            setIsPointer(isTargetPointer)
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        window.addEventListener("mousemove", updateMousePosition)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    // Ne pas afficher sur les appareils mobiles ou avant le montage
    if (!mounted || (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches)) {
        return null
    }

    const borderColor = resolvedTheme === "dark" ? "border-white" : "border-black"

    return (
        <motion.div
            className={`fixed top-0 left-0 w-10 h-10 rounded-full bg-transparent border pointer-events-none z-50 ${borderColor}`}
            animate={{
                x: position.x - 20,
                y: position.y - 20,
                scale: isPointer ? 1.5 : 1,
            }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 250,
                mass: 0.5,
            }}
            style={{
                opacity: isVisible ? 0.8 : 0,
            }}
        />
    )
}
