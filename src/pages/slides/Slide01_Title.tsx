const base = import.meta.env.BASE_URL;

export default function Slide01_Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={`${base}hero-bg.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="AR background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-[5vw]">
        <div className="animate-scale-in">
          <div className="w-[14vw] h-[0.4vh] bg-primary mx-auto mb-[3vh]" />
        </div>
        <h1
          className="font-display text-white animate-slide-up"
          style={{ fontSize: "7vw", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          SmartHome AR
        </h1>
        <p
          className="font-body text-accent mt-[3vh] animate-slide-up-delay-1"
          style={{ fontSize: "2.4vw", fontWeight: 300, letterSpacing: "0.05em" }}
        >
          Visualisez votre futur intérieur en réalité augmentée
        </p>
        <p
          className="font-body text-muted mt-[2vh] animate-slide-up-delay-2"
          style={{ fontSize: "1.6vw", fontWeight: 400 }}
        >
          Une application mobile qui révolutionne l'achat de mobilier
        </p>
        <div className="animate-fade-in-delay-2 mt-[5vh]">
          <div
            className="inline-flex items-center gap-[1vw] px-[2.5vw] py-[1.5vh] rounded-full"
            style={{ border: "1px solid rgba(167, 139, 250, 0.4)", background: "rgba(124, 58, 237, 0.15)" }}
          >
            <div className="w-[1vw] h-[1vw] rounded-full bg-accent animate-pulse-glow" />
            <span
              className="font-body text-muted"
              style={{ fontSize: "1.4vw", fontWeight: 400 }}
            >
              Présentation Produit 2025
            </span>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-[18vh] transform -translate-x-1/2 flex items-start gap-[2.5vw] z-20">
          <div className="w-[28vw] bg-[rgba(39,14,56,0.6)] backdrop-blur-md rounded-xl p-[1.6vw] shadow-lg border border-[rgba(167,139,250,0.12)]">
            <div className="text-[0.9vw] text-primary font-semibold mb-[0.8vh] uppercase tracking-wider">RÉALISÉ PAR</div>
            <ul className="space-y-[0.8vh] text-white font-medium text-[1.1vw]">
              <li>Boukhana Yassamine</li>
              <li>Chattouf Israe</li>
              <li>Ahadji Abderrahim</li>
            </ul>
          </div>

          <div className="w-[18vw] bg-[rgba(39,14,56,0.45)] backdrop-blur-md rounded-xl p-[1.2vw] shadow-md border border-[rgba(167,139,250,0.08)] self-center">
            <div className="text-[0.9vw] text-primary font-semibold mb-[0.8vh] uppercase tracking-wider">ENCADRÉ PAR</div>
            <div className="text-white font-medium text-[1.1vw]">Karima Aissaoui</div>
          </div>
        </div>
      </div>
    </div>
  );
}
