import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Por que minha empresa precisa de um website profissional?",
    answer: "Um website profissional aumenta a credibilidade do negócio, fortalece a marca e funciona como um canal ativo de vendas e atendimento 24 horas por dia. Ele centraliza informações, facilita o contato com clientes e amplia o alcance da empresa no ambiente digital."
  },
  {
    question: "Que serviços podem ser incluídos em um website?",
    answer: "Um website pode incluir diversos serviços, como: Páginas institucionais e landing pages, Formulários de contato integrados, Chatbots para atendimento automático, Integração com WhatsApp, e-mail e redes sociais, Painéis administrativos, Sistemas de agendamento, Integrações com APIs, CRMs e ferramentas de automação"
  },
  {
    question: "Qual a vantagem de ter um chatbot integrado ao website?",
    answer: "O chatbot permite atendimento imediato, responde perguntas frequentes, qualifica leads e direciona clientes automaticamente, reduzindo custos operacionais e melhorando a experiência do usuário, mesmo fora do horário comercial."
  },
  {
    question: "Para que serve um formulário integrado no website?",
    answer: "Formulários integrados facilitam a captação de leads, orçamentos e contatos. Eles podem ser conectados a sistemas de e-mail, bancos de dados ou automações, garantindo que nenhuma solicitação seja perdida e que o atendimento seja mais rápido e organizado."
  },
  {
    question: "Qual o diferencial de um site moderno e rápido?",
    answer: "Sites modernos e rápidos oferecem uma experiência de usuário superior, melhoram o ranqueamento nos motores de busca (SEO), aumentam as taxas de conversão e transmitem uma imagem profissional e confiável para seus visitantes."
  },
  {
    question: "O que são automações e como elas ajudam o negócio?",
    answer: "Automações são processos que executam tarefas repetitivas de forma automática, como envio de e-mails, respostas a formulários, notificações e organização de dados. Elas reduzem erros, economizam tempo e aumentam a eficiência operacional."
  },
  {
    question: 'É possível integrar o website com ferramentas externas?',
    answer: 'Sim. Um website pode ser integrado com ferramentas como WhatsApp, sistemas de pagamento, CRMs, plataformas de e-mail marketing e soluções de automação, criando um fluxo de trabalho mais eficiente e centralizado.'
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos suporte técnico e manutenção para garantir que seu site e automações continuem funcionando perfeitamente. Também disponibilizamos pacotes de atualização e melhorias contínuas."
  }
];

export const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e como podemos ajudar seu negócio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline text-left text-base md:text-lg font-medium py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};