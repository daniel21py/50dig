import Cal from "@calcom/embed-react";

export default function Calendar() {
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
          <Cal 
            calLink="danielmaz/consulenza"
            style={{width: "100%", height: "100%", minHeight: "800px", border: "none"}}
            config={{
              name: "Consulenza AI",
              theme: "dark",
              layout: "month_view"
            }}
          />
        </div>
      </div>
    </section>
  );
}