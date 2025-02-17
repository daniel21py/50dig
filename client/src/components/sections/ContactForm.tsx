import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      try {
        // First try the API endpoint
        const response = await fetch("/api/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("API error");
        }

        return response.json();
      } catch (error) {
        // If API fails, provide mailto link as fallback
        const mailtoUrl = `mailto:info@50digital.it?subject=Nuovo messaggio da ${encodeURIComponent(data.name)}&body=${encodeURIComponent(`Nome: ${data.name}\nEmail: ${data.email}\n\nMessaggio:\n${data.message}`)}`;
        window.location.href = mailtoUrl;
        return { success: true, fallback: true };
      }
    },
    onSuccess: (data) => {
      if (data.fallback) {
        toast({
          title: "Email client aperto",
          description: "Ti abbiamo reindirizzato al tuo client email per inviare il messaggio.",
        });
      } else {
        toast({
          title: "Messaggio inviato!",
          description: "Ti risponderemo al più presto."
        });
      }
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Errore",
        description: (
          <div className="space-y-2">
            <p>Non è stato possibile inviare il messaggio direttamente.</p>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => {
                const { name, email, message } = form.getValues();
                const mailtoUrl = `mailto:info@50digital.it?subject=Nuovo messaggio da ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`)}`;
                window.location.href = mailtoUrl;
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Apri nel client email
            </Button>
          </div>
        )
      });
    }
  });

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contattami</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Il tuo nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="tua@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Messaggio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Come posso aiutarti?"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Invio in corso..." : "Invia Messaggio"}
              </Button>

              <p className="mt-4 text-sm text-center text-muted-foreground">
                In alternativa, puoi inviarmi una email direttamente a{' '}
                <a 
                  href="mailto:info@50digital.it"
                  className="text-[#7FFF00] hover:underline"
                >
                  info@50digital.it
                </a>
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}