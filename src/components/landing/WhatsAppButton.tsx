import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappNumber = "5586995633313"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Caio Solutions."
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg glow-accent"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
    </motion.a>
  );
};
