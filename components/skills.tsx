"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Code2, Database, Layout, Server, Smartphone, Workflow } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const frontendSkills = [
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Nuxt.js", icon: "devicon-nuxtjs-plain" },
  ]

  const backendSkills = [
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Symfony", icon: "devicon-symfony-original" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "ViteJs", icon: "devicon-vitejs-plain" },
  ]

  const services = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Développement Frontend",
      description:
        "Création d'interfaces utilisateur modernes, réactives et accessibles avec les dernières technologies web.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Développement Backend",
      description: "Conception d'APIs robustes et évolutives pour alimenter vos applications web et mobiles.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Applications Responsive",
      description:
        "Développement d'applications qui fonctionnent parfaitement sur tous les appareils et tailles d'écran.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Gestion de Base de Données",
      description: "Conception et optimisation de bases de données pour stocker et récupérer efficacement vos données.",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Intégration d'API",
      description: "Connexion de votre application à des services tiers pour étendre ses fonctionnalités.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: "Optimisation des Performances",
      description: "Amélioration de la vitesse et des performances de vos applications web existantes.",
    },
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
    <section id="skills" ref={ref} className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-primary">compétences</span> & services
          </h2>
          <p className="text-muted-foreground">
            Je propose une gamme complète de services pour répondre à vos besoins en développement web, de la conception
            à la mise en production.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Frontend</h3>
            <div className="grid grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 flex items-center justify-center mb-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                    <i className={`${skill.icon} text-4xl text-primary`}></i>
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Backend</h3>
            <div className="grid grid-cols-3 gap-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 flex items-center justify-center mb-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors">
                    <i className={`${skill.icon} text-4xl text-primary`}></i>
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
