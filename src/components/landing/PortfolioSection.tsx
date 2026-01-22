import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  url: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Monteiro & Associados | Advocacia Empresarial",
    category: "Website Institucional",
    url: "https://monteiroassociados.vercel.app/",
    description: "Website institucional desenvolvido para escritório de advocacia especializado em Direito Empresarial.",
    image: "p1.png",
    technologies: ["UX/UI Design", "Branding Jurídico", "Direito Empresarial"],
  },
  {
    id: 2,
    title: "Mariana Costa Fotografia | Capturando Momentos Inesquecíveis",
    category: "Landing Page",
    url: "https://marianacostafotografias.vercel.app/",
    description: "Landing page desenvolvida para fotógrafa profissional com estética visual refinada e conversão de visitantes em contatos qualificados para ensaios e eventos.",
    image: "p2.png",
    technologies: ["Fotografia Profissional", "Branding Pessoal", "Portfólio Visual"],
  },
  {
    id: 3,
    title: "Sistema de Contas Pagar",
    category: "Automação",
    url: "https://contasapagar.caiocarvalho.dev.br",
    description: "Sistema de controle financeiro para empresas.",
    image: "p3.png",
    technologies: ["APIs", "IA"],
  },
  {
    id: 4,
    title: "Mercantil Nicolau",
    category: "Landing Page",
    url: "https://mercantil-nicolau.vercel.app/",
    description: "Landing Page Profissional para comércio local.",
    image: "p4.png",
    technologies: ["React", "Mercantil", "Informações de Contato"],
  },
];

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos que <span className="text-primary">Entregamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos trabalhos que realizamos e os resultados alcançados para nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter blur-[2px] group-hover:blur-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Ver Detalhes
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-card border border-border rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 justify-between">
                  <Button asChild className=" hover:bg-white/90 text-accent-foreground">
                    <a href={selectedProject.url} target="_blank">Ver Projeto</a>
                  </Button>
                  <Button asChild className=" hover:bg-accent/90 text-accent-foreground">
                    <a href="#contato" onClick={() => setSelectedProject(null)} >Quero um projeto assim</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
