import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-black text-[#7FFF00]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Trasforma la Tua Azienda con l'Intelligenza Artificiale
          </motion.h1>

          <motion.p 
            className="text-xl text-white/80 mb-8"
            variants={itemVariants}
          >
            Ottimizza l'efficienza e riduci i costi integrando l'AI nelle tue operazioni quotidiane.
            Ti aiutiamo a navigare nel mondo dell'intelligenza artificiale con soluzioni pratiche.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-x-4"
          >
            <Button size="lg" className="bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90">
              Prenota una Consulenza
            </Button>
            <Button size="lg" variant="outline" className="border-[#7FFF00] text-[#7FFF00] hover:bg-[#7FFF00]/10">
              Scopri di Più
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}