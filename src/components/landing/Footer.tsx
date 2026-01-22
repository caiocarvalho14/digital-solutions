import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/caiosolutions.dev", label: "Instagram" },
  { icon: Github, href: "https://github.com/caiocarvalho14", label: "GitHub" },
];

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#inicio" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground">
                Caio<span className="text-primary">Solutions</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Transformando negócios através de soluções digitais inovadoras e personalizadas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Caio Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
