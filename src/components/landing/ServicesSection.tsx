import { motion } from "framer-motion";
import { Globe, Zap, Settings, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Sites Modernos e Rápidos",
    description:
      "Desenvolvemos websites responsivos, otimizados para SEO (busca no google) e com performance excepcional. Seu negócio com presença digital profissional que converte visitantes em clientes.",
    features: ["Design Responsivo", "Otimização SEO", "Alta Performance", "Chatbot Integrado"],
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description:
      "Automatize tarefas repetitivas e integre sistemas para aumentar a produtividade da sua equipe. Economize tempo e reduza erros com fluxos de trabalho inteligentes.",
    features: ["Integração de APIs", "Workflows Automatizados", "Chatbots", "Relatórios Automáticos"],
  },
  {
    icon: Settings,
    title: "Soluções Personalizadas",
    description:
      "Cada negócio é único. Desenvolvemos soluções sob medida que se adaptam perfeitamente às suas necessidades específicas e objetivos de crescimento.",
    features: ["Análise de Requisitos", "Desenvolvimento Ágil", "Escalabilidade", "Manutenção"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções que Impulsionam seu <span className="text-primary">Crescimento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços completos para transformar sua presença digital e otimizar seus processos de negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:glow-primary">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group/link"
                  >
                    Saiba mais
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
