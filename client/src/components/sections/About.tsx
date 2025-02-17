import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Esperienza AI",
      description: "Profonda comprensione delle tecnologie AI e delle loro applicazioni aziendali"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Crescita Aziendale",
      description: "Comprovata esperienza nell'aiutare le imprese a crescere con soluzioni AI"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Approccio Personale",
      description: "Soluzioni su misura che si adattano alle tue specifiche esigenze aziendali"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Chi Sono</h2>
          <div className="text-muted-foreground space-y-4">
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
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}