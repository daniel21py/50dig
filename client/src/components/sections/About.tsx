import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Users, BarChart } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
};

export default function About() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-[#7FFF00]" />,
      title: "Consulenza Strategica",
      description: "Analizzo le esigenze della tua impresa per identificare le migliori opportunità di implementazione dell'AI"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#7FFF00]" />,
      title: "Implementazione AI",
      description: "Supporto nell'integrazione di strumenti AI che semplificano le attività quotidiane"
    },
    {
      icon: <Users className="h-8 w-8 text-[#7FFF00]" />,
      title: "Formazione e Supporto",
      description: "Sessioni di training dedicate per te e il tuo team per sfruttare al massimo il potenziale dell'AI"
    },
    {
      icon: <BarChart className="h-8 w-8 text-[#7FFF00]" />,
      title: "Ottimizzazione Processi",
      description: "Analisi dei dati e identificazione delle aree di miglioramento per aumentare la produttività"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-[#7FFF00]"
            variants={itemVariants}
          >
            Cosa Offro
          </motion.h2>
          <motion.div 
            className="text-white/80 space-y-6"
            variants={itemVariants}
          >
            <p>
              La mia missione è rendere l'intelligenza artificiale accessibile e vantaggiosa per ogni imprenditore. 
              Sono specializzato nel tradurre le potenzialità dell'AI in soluzioni concrete e personalizzate, 
              capaci di ottimizzare le operazioni quotidiane e ridurre i costi operativi.
            </p>
            <p>
              Che tu stia cercando di ridurre i costi, semplificare la gestione quotidiana o innovare il tuo modo di lavorare, 
              sono qui per guidarti in ogni fase del percorso. Insieme, possiamo trasformare le sfide in opportunità e 
              dare al tuo business la marcia in più per competere nel mercato odierno.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    delay: index * 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-[#7FFF00]/20 hover:border-[#7FFF00]/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-block p-3 bg-[#7FFF00]/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#7FFF00]">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}