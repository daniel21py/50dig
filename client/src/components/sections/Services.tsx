import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, LineChart, Clock, DollarSign } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI tools into your existing workflow"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Process Optimization",
      description: "Identify and automate repetitive tasks for maximum efficiency"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Savings",
      description: "Reduce manual work and focus on strategic activities"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Reduction",
      description: "Lower operational costs through intelligent automation"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            We offer comprehensive AI consulting services to help your business thrive in the digital age
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
            >
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
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
