"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dès que possible.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Localisation",
      details: "Bordeaux, Toulouse, Biarritz, Marseille",
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email",
      details: "prime.devpro@gmail.com",
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Téléphone",
      details: "+33 6 31 58 63 44",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me <span className="text-primary">contacter</span>
          </h2>
          <p className="text-muted-foreground">
            Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter, je vous répondrai dans les plus
            brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/*<Card>*/}
          {/*  <CardContent className="p-6 md:p-8">*/}
          {/*    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
          {/*      <div className="space-y-2">*/}
          {/*        <label htmlFor="name" className="text-sm font-medium">*/}
          {/*          Nom complet*/}
          {/*        </label>*/}
          {/*        <Input*/}
          {/*          id="name"*/}
          {/*          name="name"*/}
          {/*          placeholder="Votre nom"*/}
          {/*          value={formData.name}*/}
          {/*          onChange={handleChange}*/}
          {/*          required*/}
          {/*        />*/}
          {/*      </div>*/}

          {/*      <div className="space-y-2">*/}
          {/*        <label htmlFor="email" className="text-sm font-medium">*/}
          {/*          Adresse email*/}
          {/*        </label>*/}
          {/*        <Input*/}
          {/*          id="email"*/}
          {/*          name="email"*/}
          {/*          type="email"*/}
          {/*          placeholder="votre@email.com"*/}
          {/*          value={formData.email}*/}
          {/*          onChange={handleChange}*/}
          {/*          required*/}
          {/*        />*/}
          {/*      </div>*/}

          {/*      <div className="space-y-2 md:col-span-2">*/}
          {/*        <label htmlFor="subject" className="text-sm font-medium">*/}
          {/*          Sujet*/}
          {/*        </label>*/}
          {/*        <Input*/}
          {/*          id="subject"*/}
          {/*          name="subject"*/}
          {/*          placeholder="Sujet de votre message"*/}
          {/*          value={formData.subject}*/}
          {/*          onChange={handleChange}*/}
          {/*          required*/}
          {/*        />*/}
          {/*      </div>*/}

          {/*      <div className="space-y-2 md:col-span-2">*/}
          {/*        <label htmlFor="message" className="text-sm font-medium">*/}
          {/*          Message*/}
          {/*        </label>*/}
          {/*        <Textarea*/}
          {/*          id="message"*/}
          {/*          name="message"*/}
          {/*          placeholder="Votre message"*/}
          {/*          rows={6}*/}
          {/*          value={formData.message}*/}
          {/*          onChange={handleChange}*/}
          {/*          required*/}
          {/*        />*/}
          {/*      </div>*/}

          {/*      <div className="md:col-span-2">*/}
          {/*        <Button type="submit" className="w-full" disabled={isSubmitting}>*/}
          {/*          {isSubmitting ? (*/}
          {/*            <span className="flex items-center">*/}
          {/*              <svg*/}
          {/*                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"*/}
          {/*                xmlns="http://www.w3.org/2000/svg"*/}
          {/*                fill="none"*/}
          {/*                viewBox="0 0 24 24"*/}
          {/*              >*/}
          {/*                <circle*/}
          {/*                  className="opacity-25"*/}
          {/*                  cx="12"*/}
          {/*                  cy="12"*/}
          {/*                  r="10"*/}
          {/*                  stroke="currentColor"*/}
          {/*                  strokeWidth="4"*/}
          {/*                ></circle>*/}
          {/*                <path*/}
          {/*                  className="opacity-75"*/}
          {/*                  fill="currentColor"*/}
          {/*                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"*/}
          {/*                ></path>*/}
          {/*              </svg>*/}
          {/*              Envoi en cours...*/}
          {/*            </span>*/}
          {/*          ) : (*/}
          {/*            <span className="flex items-center">*/}
          {/*              <Send className="mr-2 h-4 w-4" />*/}
          {/*              Envoyer le message*/}
          {/*            </span>*/}
          {/*          )}*/}
          {/*        </Button>*/}
          {/*      </div>*/}
          {/*    </form>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
        </motion.div>
      </div>
    </section>
  )
}
