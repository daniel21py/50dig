import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Expertise",
      description: "Deep understanding of AI technologies and their business applications"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Growth",
      description: "Proven track record of helping businesses scale with AI solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personal Approach",
      description: "Tailored solutions that match your specific business needs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground">
            We are entrepreneurs who understand the challenges of running a business. 
            Our mission is to make AI accessible and practical for businesses of all sizes.
          </p>
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
