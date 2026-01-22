import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(10, "Telefone inválido").max(20),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

export const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const whatsappNumber = "5586995633313";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Validação com Zod
      const validatedData = contactSchema.parse(formData);

      // Envio real
      const response = await fetch("https://formsubmit.co/k4io12345@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          message: validatedData.message,
          _subject: "Novo contato pelo site",
          _template: "table"
        }).toString()
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};

        error.errors.forEach((err) => {
          const field = err.path[0];
          if (field) {
            fieldErrors[field as string] = err.message;
          }
        });

        setErrors(fieldErrors);
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos <span className="text-primary">Conversar?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar seu negócio a crescer. Entre em contato e receba um orçamento personalizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-card border-border focus:border-primary h-12 ${errors.name ? "border-destructive" : ""
                    }`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-card border-border focus:border-primary h-12 ${errors.email ? "border-destructive" : ""
                    }`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-card border-border focus:border-primary h-12 ${errors.phone ? "border-destructive" : ""
                    }`}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`bg-card border-border focus:border-primary resize-none ${errors.message ? "border-destructive" : ""
                    }`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 h-12 text-lg glow-primary"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                Outras formas de contato
              </h3>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Resposta rápida</p>
                  </div>
                </a>
                <a
                  href="mailto:k4io12345@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">k4io12345@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localização</p>
                    <p className="text-sm text-muted-foreground">Atendimento remoto em todo Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">⚡ Resposta Rápida</h4>
              <p className="text-sm text-muted-foreground">
                Respondemos todas as mensagens em até 2 horas úteis. Para urgências, prefira o WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
