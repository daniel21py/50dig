import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Users } from "lucide-react";

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
      title: "Esperienza AI",
      description: "Profonda comprensione delle tecnologie AI e delle loro applicazioni aziendali"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#7FFF00]" />,
      title: "Crescita Aziendale",
      description: "Comprovata esperienza nell'aiutare le imprese a crescere con soluzioni AI"
    },
    {
      icon: <Users className="h-8 w-8 text-[#7FFF00]" />,
      title: "Approccio Personale",
      description: "Soluzioni su misura che si adattano alle tue specifiche esigenze aziendali"
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
            Chi Sono
          </motion.h2>
          <motion.div 
            className="text-white/80 space-y-4"
            variants={itemVariants}
          >
            <p>
              Ciao! Sono Daniel, un imprenditore come te. L'unica differenza è che ho iniziato 
              già tempo fa a chiedermi come poter utilizzare l'AI nella mia attività, come integrarla 
              per eliminare quelle attività che mi occupavano troppo tempo, tempo che avrei potuto 
              investire in modo più strategico.
            </p>
            <p>
              Ho iniziato a studiare, sperimentare quello che imparavo e, inevitabilmente, anche a 
              fallire e scervellarmi per ore, dato che non sono un programmatore. Ma grazie a tutto 
              questo percorso, oggi posso aiutarti a evitare gli stessi ostacoli.
            </p>
            <p>
              La mia missione è guidarti verso le strategie giuste da implementare, i tool da 
              utilizzare e i metodi per semplificare la tua vita imprenditoriale!
            </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <CardContent className="pt-6 text-center">
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