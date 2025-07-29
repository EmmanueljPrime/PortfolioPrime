import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">Créateur de solutions digitales modernes</p>
          </div>

          <div className="flex gap-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/EmmanueljPrime/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/emmanuel-prime/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:prime.devpro@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} PrimeDev Pro. Tous droits réservés.
          </p>

          <nav className="flex gap-6">
            <Link href="" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
