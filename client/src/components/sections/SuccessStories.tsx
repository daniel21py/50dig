import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface SuccessStory {
  title: string;
  description: string;
  metrics: string;
  industry: string;
}

const successStories: SuccessStory[] = [
  {
    title: "Ottimizzazione E-commerce",
    description: "Implementazione di AI per personalizzare l'esperienza utente e aumentare le conversioni",
    metrics: "+45% conversioni",
    industry: "Retail"
  },
  {
    title: "Automazione Processi",
    description: "Sviluppo di sistemi automatizzati per la gestione delle comunicazioni cliente",
    metrics: "-60% tempo gestione",
    industry: "Servizi"
  },
  {
    title: "Analisi Predittiva",
    description: "Sistema di previsione della domanda basato su machine learning",
    metrics: "+30% accuratezza",
    industry: "Manifattura"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function SuccessStories() {
  const isMobile = useIsMobile();

  return (
    <section id="success-stories" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Casi di Successo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scopri come abbiamo aiutato le aziende a trasformare le loro sfide in opportunità attraverso soluzioni AI innovative.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={isMobile ? {} : { scale: 1.02, y: -5 }}
              className="bg-black/40 backdrop-blur-sm border border-[#7FFF00]/20 rounded-lg p-6 relative overflow-hidden group"
            >
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#7FFF00]/50 to-[#7FFF00]"
              />

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#7FFF00] transition-colors">
                {story.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {story.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#7FFF00] font-semibold">
                  {story.metrics}
                </span>
                <span className="text-white/60">
                  {story.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}