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
  // Array di diverse forme e dimensioni
  const shapes = [
    { size: 120, duration: 25, delay: 0, opacity: 0.1, borderWidth: 2 },
    { size: 180, duration: 30, delay: 2, opacity: 0.08, borderWidth: 3 },
    { size: 90, duration: 20, delay: 1, opacity: 0.12, borderWidth: 1 },
    { size: 150, duration: 28, delay: 3, opacity: 0.07, borderWidth: 2 },
    { size: 200, duration: 35, delay: 4, opacity: 0.05, borderWidth: 4 },
    { size: 100, duration: 22, delay: 2, opacity: 0.09, borderWidth: 2 },
    { size: 160, duration: 32, delay: 1, opacity: 0.06, borderWidth: 3 },
    { size: 130, duration: 27, delay: 3, opacity: 0.08, borderWidth: 2 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`
          }}
          animate={{
            x: ["0%", "100%", "0%"],
            y: [`${i * 10}%`, `${(i * 10 + 50) % 100}%`, `${i * 10}%`],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            border: `${shape.borderWidth}px solid rgba(127, 255, 0, ${shape.opacity})`,
            borderRadius: i % 2 === 0 
              ? "30% 70% 70% 30% / 30% 30% 70% 70%" 
              : "60% 40% 30% 70% / 60% 30% 70% 40%",
            filter: "blur(0.5px)"
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