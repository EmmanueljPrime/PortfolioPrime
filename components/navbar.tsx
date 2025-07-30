"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
      <header
          className={cn(
              "fixed top-0 w-full z-50 overflow-hidden transition-all duration-500 ease-in-out",
              isOpen ? "max-h-[500px]" : "max-h-[64px]", // hauteur fermée vs ouverte
              scrolled || isOpen ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
          )}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter relative z-10">
            <span className="text-primary">PrimeDev </span>Pro
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile links dans même bloc */}
        <nav
            className={cn(
                "flex-col items-center gap-4 pt-4 pb-6 md:hidden transition-opacity duration-300",
                isOpen ? "flex opacity-100" : "hidden opacity-0"
            )}
        >
          {navLinks.map((link) => (
              <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
          ))}
        </nav>
      </header>
  )
}
