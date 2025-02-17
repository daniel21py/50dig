import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Calendar from "@/components/sections/Calendar";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Calendar />
      <ContactForm />
    </>
  );
}