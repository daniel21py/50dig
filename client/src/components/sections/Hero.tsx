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

// Sfondo animato
const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: ["0%", "100%", "0%"],
            y: [(i * 20) + "%", ((i * 20) + 10) + "%", (i * 20) + "%"],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${i * 25}%`,
            width: "120px",
            height: "120px",
            border: "2px solid rgba(127, 255, 0, 0.1)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-black text-[#7FFF00] relative overflow-hidden">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 relative z-10">
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
            <a href="/#contact">
              <Button size="lg" className="bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90">
                Prenota una Consulenza
              </Button>
            </a>
            <a href="/#about">
              <Button size="lg" variant="outline" className="border-[#7FFF00] text-[#7FFF00] hover:bg-[#7FFF00]/10">
                Scopri di Più
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}