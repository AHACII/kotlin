const base = import.meta.env.BASE_URL;

export default function Slide06_AR() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-[5vw]">
        <div className="animate-slide-up text-center">
          <div
            className="font-display text-primary"
            style={{ fontSize: "1.4vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            L'Expérience AR en Action
          </div>
          <div className="w-[8vw] h-[0.3vh] bg-primary mx-auto mt-[2vh]" />
        </div>
        <h2
          className="font-display text-white mt-[2.5vh] text-center animate-slide-up-delay-1"
          style={{ fontSize: "3.4vw", fontWeight: 700, lineHeight: 1.2 }}
        >
          Votre intérieur, en réalité augmentée
        </h2>
        <p
          className="font-body text-muted mt-[1.5vh] text-center max-w-[60vw] animate-fade-in-delay-1"
          style={{ fontSize: "1.6vw", fontWeight: 400, lineHeight: 1.5 }}
        >
          Un processus en trois étapes simples pour visualiser n'importe quel meuble
          dans votre propre espace, à l'échelle réelle et en temps réel.
        </p>
        <div className="mt-[4vh] flex gap-[3vw] max-w-[90vw]">
          <div className="flex-1 text-center animate-slide-up-delay-2">
            <div
              className="w-[7.5vw] h-[7.5vw] rounded-full mx-auto mb-[2vh] flex items-center justify-center"
              style={{ background: "rgba(124, 58, 237, 0.15)", border: "2px solid rgba(124, 58, 237, 0.4)" }}
            >
              <svg className="w-[3.2vw] h-[3.2vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
              </svg>
            </div>
            <h3 className="font-display text-white" style={{ fontSize: "1.9vw", fontWeight: 600, marginBottom: "1vh" }}>
              1. Scanner
            </h3>
            <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.4 }}>
              Pointez la caméra sur votre pièce
            </p>
            <p className="font-body text-muted mt-[0.5vh]" style={{ fontSize: "1.3vw", fontWeight: 400, lineHeight: 1.4 }}>
              L'app analyse la surface et la profondeur de la pièce automatiquement
            </p>
          </div>
          <div className="flex items-center pt-[2vh]">
            <div className="w-[2vw] h-[0.2vh] bg-primary/40" />
            <svg className="w-[1.5vw] h-[1.5vw] text-primary mx-[0.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <div className="w-[2vw] h-[0.2vh] bg-primary/40" />
          </div>
          <div className="flex-1 text-center animate-slide-up-delay-2" style={{ animationDelay: "0.45s" }}>
            <div
              className="w-[7.5vw] h-[7.5vw] rounded-full mx-auto mb-[2vh] flex items-center justify-center"
              style={{ background: "rgba(167, 139, 250, 0.15)", border: "2px solid rgba(167, 139, 250, 0.4)" }}
            >
              <svg className="w-[3.2vw] h-[3.2vw] text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-display text-white" style={{ fontSize: "1.9vw", fontWeight: 600, marginBottom: "1vh" }}>
              2. Placer
            </h3>
            <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.4 }}>
              Positionnez le meuble en 3D
            </p>
            <p className="font-body text-muted mt-[0.5vh]" style={{ fontSize: "1.3vw", fontWeight: 400, lineHeight: 1.4 }}>
              Glissez, zoomez, et faites pivoter avec vos doigts
            </p>
          </div>
          <div className="flex items-center pt-[2vh]">
            <div className="w-[2vw] h-[0.2vh] bg-accent/40" />
            <svg className="w-[1.5vw] h-[1.5vw] text-accent mx-[0.5vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <div className="w-[2vw] h-[0.2vh] bg-accent/40" />
          </div>
          <div className="flex-1 text-center animate-slide-up-delay-3" style={{ animationDelay: "0.65s" }}>
            <div
              className="w-[7.5vw] h-[7.5vw] rounded-full mx-auto mb-[2vh] flex items-center justify-center"
              style={{ background: "rgba(124, 58, 237, 0.15)", border: "2px solid rgba(124, 58, 237, 0.4)" }}
            >
              <svg className="w-[3.2vw] h-[3.2vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-white" style={{ fontSize: "1.9vw", fontWeight: 600, marginBottom: "1vh" }}>
              3. Valider
            </h3>
            <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.4 }}>
              Confirmez votre choix
            </p>
            <p className="font-body text-muted mt-[0.5vh]" style={{ fontSize: "1.3vw", fontWeight: 400, lineHeight: 1.4 }}>
              Sauvegardez le projet ou achetez directement
            </p>
          </div>
        </div>
        <div className="mt-[4vh] animate-fade-in-delay-2">
          <div
            className="inline-flex items-center gap-[1vw] px-[3vw] py-[1.5vh] rounded-full"
            style={{ background: "rgba(124, 58, 237, 0.15)", border: "1px solid rgba(124, 58, 237, 0.3)" }}
          >
            <div className="w-[0.8vw] h-[0.8vw] rounded-full bg-accent animate-pulse-glow" />
            <span className="font-body text-white" style={{ fontSize: "1.5vw", fontWeight: 400 }}>
              Ajustement taille, position et orientation en temps réel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
