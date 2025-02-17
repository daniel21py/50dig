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

// Sfondo animato con più forme e movimenti più rapidi
const BackgroundAnimation = () => {
  const shapes = Array(15).fill(null).map((_, i) => ({
    size: Math.random() * 150 + 50, // 50-200px
    duration: Math.random() * 15 + 10, // 10-25s
    delay: Math.random() * 5,
    opacity: Math.random() * 0.1 + 0.05,
    borderWidth: Math.floor(Math.random() * 3) + 1,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    direction: i % 2 === 0 ? 1 : -1
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${shape.initialX}%`,
            y: `${shape.initialY}%`
          }}
          animate={{
            x: [
              `${shape.initialX}%`,
              `${(shape.initialX + 100 * shape.direction) % 100}%`,
              `${shape.initialX}%`
            ],
            y: [
              `${shape.initialY}%`,
              `${(shape.initialY + 70) % 100}%`,
              `${shape.initialY}%`
            ],
            rotate: [0, 360 * shape.direction],
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
            borderRadius: i % 3 === 0 
              ? "30% 70% 70% 30% / 30% 30% 70% 70%" 
              : i % 3 === 1
                ? "60% 40% 30% 70% / 60% 30% 70% 40%"
                : "50% 50% 50% 50% / 50% 50% 50% 50%",
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