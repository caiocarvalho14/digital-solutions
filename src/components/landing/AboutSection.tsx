import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é desenvolvido com métricas claras de sucesso.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Utilizamos as tecnologias mais modernas do mercado.",
  },
  {
    icon: Heart,
    title: "Compromisso Total",
    description: "Tratamos cada projeto como se fosse nosso próprio negócio.",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Seu Parceiro na <span className="text-primary">Transformação Digital</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              A Caio Solutions nasceu da paixão por tecnologia e do desejo de ajudar empresas a alcançarem seu potencial máximo no mundo digital.
            </p>
            <p className="text-muted-foreground mb-8">
              Oferecemos soluções personalizadas que realmente fazem a diferença, combinando expertise técnica com visão estratégica de negócios.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Comunicação transparente em todas as etapas",
                "Entregas no prazo com qualidade garantida",
                "Suporte contínuo pós-projeto",
                "Preços justos e competitivos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 glow-primary">
              <a href="#contato">Vamos Conversar</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
