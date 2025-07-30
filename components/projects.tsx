"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Wovely",
      description: "Une plateforme de mise en relation Client -> Couturier avec panier, paiement, gestion de projets et gestion des commandes.",
      image: "/wovely.png?height=600&width=800",
      tags: ["React", "Next.js", "Stripe", "Tailwind"],
      category: "web",
      demoUrl: "http://localhost:3001/",
      githubUrl: "https://github.com/EmmanueljPrime/wovely",
    },
    {
      id: 2,
      title: "Application de céation de kit ui",
      description: "Une application de création de kit ui avec authentification et fonctionnalités collaboratives.",
      image: "/kitui.png?height=600&width=800",
      tags: ["Vue.js", "Mysql"],
      category: "web",
      demoUrl: "http://localhost:5173/",
      githubUrl: "https://github.com/EmmanueljPrime/Kitui",
    },
    {
      id: 3,
      title: "Générateur de Mot de passe complexe",
      description: "Générateur de mots de passe sécurisé avec analyse de robustesse et support de hachage multi-algorithmes (bcrypt, SHA-256, etc.).",
      image: "/primepass.png?height=600&width=800",
      tags: ["Next.js","Tailwind CSS", "Shadcn/ui","Bcrypt"],
      category: "web",
      demoUrl: "https://prime-pass-roan.vercel.app/",
      githubUrl: "https://github.com/EmmanueljPrime/PrimePass",
    },
    {
      id: 4,
      title: "Chiffreur & déchiffreur Sécurisé",
      description: "CipherVault est une application web de chiffrement/déchiffrement moderne multi-algorithmes avec génération de QR codes, conçue pour l'exploration interactive de la cryptographie.",
      image: "/ciphervault.png?height=600&width=800",
      tags: ["Next.js","Tailwind CSS", "Shadcn/ui"],
      category: "web",
      demoUrl: "https://ciphervault-iota.vercel.app/",
      githubUrl: "https://github.com/EmmanueljPrime/ciphervault",
    },
    {
      id: 5,
      title: "Landing Page Produit",
      description: "Landing page animée pour Red Bull Zero, réalisée avec Next.js et Framer Motion.",
      image: "/redbulllanding1.png?height=600&width=800",
      tags: ["Next.js","Framer Motion"],
      category: "web",
      demoUrl: "https://redbull-landing.vercel.app/",
      githubUrl: "https://github.com/EmmanueljPrime/RedbullLanding",
    },

  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { value: "all", label: "Tous" },
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "dashboard", label: "Dashboard" },
    { value: "backend", label: "Backend" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-primary">projets</span> récents
          </h2>
          <p className="text-muted-foreground">
            Découvrez une sélection de mes projets récents qui démontrent mes compétences et mon expertise en
            développement web.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.value)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden h-full group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mb-auto">
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
