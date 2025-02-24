import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, LineChart, Clock, DollarSign } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Integrazione AI",
      description: "Integra facilmente strumenti AI nel tuo flusso di lavoro esistente per automatizzare e ottimizzare i processi"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Ottimizzazione Processi",
      description: "Identifica e automatizza le attività ripetitive per massima efficienza"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Risparmio di Tempo",
      description: "Riduci il lavoro manuale e concentrati sulle attività strategiche"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Riduzione Costi",
      description: "Abbassa i costi operativi attraverso l'automazione intelligente"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">I Nostri Servizi</h2>
          <p className="text-muted-foreground">
            Offriamo servizi di consulenza AI completi per aiutare la tua azienda a prosperare nell'era digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-none">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}