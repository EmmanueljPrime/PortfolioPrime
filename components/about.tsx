"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 -z-10 transform rotate-3" />
              <div className="absolute inset-0 rounded-2xl border border-primary/10 transform -rotate-3" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/bitmoji2.png?height=600&width=600"
                  alt="Portrait du développeur"
                  width={600}
                  height={600}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À propos de <span className="text-primary">moi</span>
            </h2>

            <p className="text-muted-foreground mb-4">
              Bonjour ! Je suis développeur Fullstack, passionné par la création d’interfaces web claires et fonctionnelles.
            </p>

            <p className="text-muted-foreground mb-4">
              J’utilise des technologies comme React, Next.js et Node.js pour développer des applications modernes et faciles à utiliser.
            </p>

            <p className="text-muted-foreground mb-6">
              Je m’intéresse aussi aux évolutions du web et je prends plaisir à apprendre et à améliorer mes compétences au quotidien.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-medium mb-2">Nom</h3>
                <p className="text-muted-foreground">Emmanuel Prime</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-muted-foreground">prime.devpro@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Localisation</h3>
                <p className="text-muted-foreground">Paris & Bordeaux, France</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Disponibilité</h3>
                <p className="text-muted-foreground">Remote / Présentiel</p>
              </div>
            </div>

            <Button asChild>
              <a href="CVEPDEV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
