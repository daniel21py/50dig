import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    // Carica lo script Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="calendar" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#7FFF00]">Prenota una Consulenza</h2>
          <p className="text-white/80 mb-8">
            Seleziona uno slot disponibile nel calendario per prenotare la tua consulenza gratuita
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/50 p-4 rounded-lg border border-[#7FFF00]/20">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/50digital?hide_gdpr_banner=1&background_color=1a1a1a&text_color=80ff00&primary_color=00f0ff"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}