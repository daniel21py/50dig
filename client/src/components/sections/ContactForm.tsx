import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function ContactForm() {
  const handleWhatsAppClick = () => {
    // Format: https://wa.me/<number>?text=<encoded-message>
    const phoneNumber = "393517749874"; // Your WhatsApp number without + or spaces
    const message = encodeURIComponent(
      "Ciao! Sono interessato ai tuoi servizi di consulenza AI."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Contattami</h2>
          <p className="text-muted-foreground mb-8">
            Scrivimi su WhatsApp per una consulenza gratuita o per discutere del tuo progetto.
          </p>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            size="lg"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contattami su WhatsApp
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Rispondo solitamente entro 24 ore
          </p>
        </motion.div>
      </div>
    </section>
  );
}