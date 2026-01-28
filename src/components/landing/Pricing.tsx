import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Plus, Clock, Star, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface Adicional {
  nome: string;
  valor: number;
  valorMensal?: number;
  prazo: string;
  descricao: string;
}

interface Produto {
  id: string;
  nome: string;
  valor: number;
  valorMensal?: number;
  descricao: string;
  prazo: string;
  destaque?: boolean;
  recursos: string[];
  adicionais: Adicional[];
}

const produtos: Produto[] = [
  {
    id: "site-institucional",
    nome: "Site Institucional",
    valor: 793,
    descricao: "Site profissional para apresentar sua empresa, serviços e conquistar novos clientes.",
    prazo: "7-10 dias",
    recursos: [
      "Design responsivo",
      "Até 5 páginas",
      "Formulário de contato",
      "Otimização SEO básica",
      "Integração com redes sociais",
    ],
    adicionais: [
      {
        nome: "Blog integrado",
        valor: 500,
        prazo: "+3 dias",
        descricao: "Sistema de blog para publicar artigos e melhorar seu SEO.",
      },
      {
        nome: "Chatbot avançado",
        valor: 200,
        prazo: "+1 dia",
        descricao: "Botão flutuante com mensagem personalizada e rastreamento.",
      },
      {
        nome: "Galeria de fotos",
        valor: 120,
        prazo: "+2 dias",
        descricao: "Galeria interativa com lightbox para exibir seus trabalhos.",
      },
    ],
  },
  {
    id: "landing-page",
    nome: "Landing Page",
    valor: 599,
    descricao: "Página de alta conversão focada em capturar leads e vender seu produto ou serviço.",
    prazo: "5-7 dias",
    destaque: true,
    recursos: [
      "Design focado em conversão",
      "Página única otimizada",
      "Formulário de captura",
      "Integração WhatsApp",
      "Animações e efeitos",
    ],
    adicionais: [
      {
        nome: "Chatbot avançado",
        valor: 200,
        prazo: "+1 dia",
        descricao: "Botão flutuante com mensagem personalizada e rastreamento.",
      },
    ],
  },
  {
    id: "automacao",
    nome: "Automação de Processos",
    valor: 2000,
    valorMensal: 300,
    descricao: "Automatize tarefas repetitivas e integre sistemas para aumentar a produtividade.",
    prazo: "10-15 dias",
    recursos: [
      "Análise de processos",
      "Integração de sistemas",
      "Workflows automatizados",
      "Relatórios e dashboards",
      "Treinamento da equipe",
    ],
    adicionais: [
      {
        nome: "Integração CRM",
        valor: 500,
        valorMensal: 50,
        prazo: "+5 dias",
        descricao: "Conexão com seu CRM para sincronização de dados.",
      },
      {
        nome: "Chatbot WhatsApp",
        valor: 800,
        valorMensal: 150,
        prazo: "+7 dias",
        descricao: "Bot automatizado para atendimento inicial via WhatsApp.",
      },
      {
        nome: "Automação de emails",
        valor: 400,
        valorMensal: 80,
        prazo: "+3 dias",
        descricao: "Sequências de emails automáticos para nutrição de leads.",
      },
    ],
  },
];

const PricingCard = ({ produto }: { produto: Produto }) => {
  const [selectedAdicionais, setSelectedAdicionais] = useState<string[]>([]);

  const toggleAdicional = (nome: string) => {
    setSelectedAdicionais((prev) =>
      prev.includes(nome) ? prev.filter((a) => a !== nome) : [...prev, nome]
    );
  };

  const valorTotal = produto.valor + produto.adicionais
    .filter((a) => selectedAdicionais.includes(a.nome))
    .reduce((acc, a) => acc + a.valor, 0);

  const valorMensalTotal = () => {
    const baseMensal = produto.valorMensal || 0;
    const adicionaisMensal = produto.adicionais
      .filter((a) => selectedAdicionais.includes(a.nome))
      .reduce((acc, a) => acc + (a.valorMensal || 0), 0);
    return baseMensal + adicionaisMensal;
  };

  const temMensalidade = produto.valorMensal || produto.adicionais.some(a => a.valorMensal && selectedAdicionais.includes(a.nome));

  const prazoTotal = () => {
    const diasAdicionais = produto.adicionais
      .filter((a) => selectedAdicionais.includes(a.nome))
      .reduce((acc, a) => {
        const dias = parseInt(a.prazo.match(/\d+/)?.[0] || "0");
        return acc + dias;
      }, 0);
    
    if (diasAdicionais === 0) return produto.prazo;
    return `${produto.prazo} + ${diasAdicionais} dias`;
  };

  return (
    <Card
      className={`relative flex flex-col h-full transition-all duration-300 hover:scale-[1.02] ${
        produto.destaque
          ? "border-primary shadow-lg shadow-primary/20"
          : "border-border/50 hover:border-primary/50"
      }`}
    >
      {produto.destaque && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3" /> Mais Popular
          </span>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl md:text-2xl text-foreground">{produto.nome}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm mt-2">
          {produto.descricao}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        <div className="text-center space-y-2">
          {/* Valor único / implementação */}
          <div>
            <p className="text-xs text-muted-foreground mb-1">Implementação</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-4xl font-bold text-foreground">{valorTotal.toLocaleString("pt-BR")}</span>
            </div>
          </div>

          {/* Valor mensal se existir */}
          {temMensalidade && valorMensalTotal() > 0 && (
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center justify-center gap-2 text-accent">
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm">+ R$ {valorMensalTotal().toLocaleString("pt-BR")}/mês</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Manutenção contínua</p>
            </div>
          )}

          <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{prazoTotal()}</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">O que está incluso:</p>
          <ul className="space-y-2">
            {produto.recursos.map((recurso, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{recurso}</span>
              </li>
            ))}
          </ul>
        </div>

        {produto.adicionais.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-border/50">
            <p className="text-sm font-medium text-foreground flex items-center gap-2">
              <Plus className="w-4 h-4" /> Adicionais opcionais:
            </p>
            <ul className="space-y-3">
              {produto.adicionais.map((adicional, index) => (
                <li key={index} className="space-y-1">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <Checkbox
                      checked={selectedAdicionais.includes(adicional.nome)}
                      onCheckedChange={() => toggleAdicional(adicional.nome)}
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          {adicional.nome}
                        </span>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-accent">
                            +R$ {adicional.valor}
                          </span>
                          {adicional.valorMensal && (
                            <span className="text-muted-foreground text-xs">
                              +R$ {adicional.valorMensal}/mês
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {adicional.descricao} <span className="text-primary">({adicional.prazo})</span>
                      </p>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
          onClick={() => {
            const mensagemMensal = temMensalidade && valorMensalTotal() > 0 
              ? ` + R$ ${valorMensalTotal().toLocaleString("pt-BR")}/mês` 
              : "";
            const mensagem = `Olá! Tenho interesse no pacote "${produto.nome}" (R$ ${valorTotal.toLocaleString("pt-BR")}${mensagemMensal})${
              selectedAdicionais.length > 0
                ? `. Adicionais selecionados: ${selectedAdicionais.join(", ")}`
                : ""
            }. Gostaria de mais informações!`;
            window.open(
              `https://wa.me/5586995633313?text=${encodeURIComponent(mensagem)}`,
              "_blank"
            );
          }}
        >
          Solicitar Orçamento
        </Button>
      </CardFooter>
    </Card>
  );
};

export const PricingSection = () => {
  return (
    <section id="precos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Pacotes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o pacote ideal para o seu negócio e personalize com adicionais conforme sua necessidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard produto={produto} />
            </motion.div>
          ))}
        </div>

        {/* Card de Solução Personalizada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="border-dashed border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/50 transition-all duration-300">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-8">
              <div className="text-center md:text-left space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Não encontrou o que procurava?
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  Criamos soluções personalizadas sob medida para o seu negócio. 
                  Conte-nos sua ideia e desenvolvemos um projeto exclusivo para você.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    const mensagem = "Olá! Gostaria de um orçamento para uma solução personalizada. Minha ideia é:";
                    window.open(
                      `https://wa.me/5586995633313?text=${encodeURIComponent(mensagem)}`,
                      "_blank"
                    );
                  }}
                >
                  Falar no WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  onClick={() => {
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Enviar Mensagem
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * Valores podem variar de acordo com a complexidade do projeto. Entre em contato para um orçamento personalizado.
        </motion.p>
      </div>
    </section>
  );
};