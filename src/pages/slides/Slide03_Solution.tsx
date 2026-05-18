const base = import.meta.env.BASE_URL;

export default function Slide03_Solution() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div
        className="absolute top-[-20vh] right-[-10vw] w-[50vw] h-[50vw] rounded-full animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 flex h-full">
        <div className="flex-1 flex flex-col justify-center px-[6vw]">
          <div className="animate-slide-up">
            <div
              className="font-display text-primary"
              style={{ fontSize: "1.4vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Notre Solution Innovante
            </div>
            <div className="w-[8vw] h-[0.3vh] bg-primary mt-[2vh]" />
          </div>
          <h2
            className="font-display text-white mt-[3vh] animate-slide-up-delay-1"
            style={{ fontSize: "3.4vw", fontWeight: 700, lineHeight: 1.2, textWrap: "balance" }}
          >
            Visualisez les meubles dans votre espace réel avant d'acheter
          </h2>
          <p
            className="font-body text-muted mt-[2vh] animate-fade-in-delay-1"
            style={{ fontSize: "1.7vw", fontWeight: 400, lineHeight: 1.5 }}
          >
            SmartHome AR est une application mobile qui utilise la réalité augmentée
            pour projeter des meubles 3D dans votre intérieur, en temps réel et à taille réelle.
          </p>
          <div className="mt-[3vh] space-y-[1.8vh]">
            <div className="flex items-center gap-[1.2vw] animate-slide-up-delay-2">
              <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-accent flex-shrink-0" />
              <p className="font-body text-white" style={{ fontSize: "1.7vw", fontWeight: 500 }}>
                Scannez votre pièce avec la caméra du téléphone
              </p>
            </div>
            <div className="flex items-center gap-[1.2vw] animate-slide-up-delay-2" style={{ animationDelay: "0.45s" }}>
              <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-accent flex-shrink-0" />
              <p className="font-body text-white" style={{ fontSize: "1.7vw", fontWeight: 500 }}>
                Placez les meubles en 3D dans votre espace réel
              </p>
            </div>
            <div className="flex items-center gap-[1.2vw] animate-slide-up-delay-3" style={{ animationDelay: "0.55s" }}>
              <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-accent flex-shrink-0" />
              <p className="font-body text-white" style={{ fontSize: "1.7vw", fontWeight: 500 }}>
                Ajustez la taille, la position et l'orientation facilement
              </p>
            </div>
            <div className="flex items-center gap-[1.2vw] animate-slide-up-delay-3" style={{ animationDelay: "0.65s" }}>
              <div className="w-[0.7vw] h-[0.7vw] rounded-full bg-accent flex-shrink-0" />
              <p className="font-body text-white" style={{ fontSize: "1.7vw", fontWeight: 500 }}>
                Validez votre choix et achetez en toute confiance
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-[3vw] animate-scale-in-delay">
          <div className="relative">
            <div
              className="absolute inset-[-2vw] rounded-[3vw] animate-pulse-glow"
              style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)" }}
            />
            <img
              src={`${base}solution-bg.png`}
              crossOrigin="anonymous"
              className="relative w-[38vw] h-auto rounded-[2vw]"
              style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.6)" }}
              alt="Solution mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
