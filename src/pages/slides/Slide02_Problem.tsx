const base = import.meta.env.BASE_URL;

export default function Slide02_Problem() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={`${base}problem-bg.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Problem background"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
      <div className="relative z-10 flex flex-col justify-center h-full px-[7vw]">
        <div className="max-w-[58vw]">
          <div className="animate-slide-up">
            <div
              className="font-display text-primary"
              style={{ fontSize: "1.4vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Le Défi du Commerce de Meubles
            </div>
            <div className="w-[8vw] h-[0.3vh] bg-primary mt-[2vh]" />
          </div>
          <h2
            className="font-display text-white mt-[3vh] animate-slide-up-delay-1"
            style={{ fontSize: "3.6vw", fontWeight: 700, lineHeight: 1.15, textWrap: "balance" }}
          >
            Acheter des meubles sans les voir chez soi = incertitude totale
          </h2>
          <div className="mt-[4vh] space-y-[2.5vh]">
            <div className="flex items-start gap-[1.5vw] animate-slide-up-delay-2">
              <div
                className="flex-shrink-0 w-[3.2vw] h-[3.2vw] rounded-full flex items-center justify-center"
                style={{ background: "rgba(124, 58, 237, 0.2)", border: "1px solid rgba(124, 58, 237, 0.4)" }}
              >
                <span className="text-primary font-display" style={{ fontSize: "1.4vw", fontWeight: 700 }}>1</span>
              </div>
              <div>
                <p className="font-body text-white" style={{ fontSize: "1.9vw", fontWeight: 600, lineHeight: 1.3 }}>
                  Retours fréquents et coûteux
                </p>
                <p className="font-body text-muted mt-[0.5vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.4 }}>
                  Jusqu'à 30% des meubles achetés en ligne sont retournés
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[1.5vw] animate-slide-up-delay-3">
              <div
                className="flex-shrink-0 w-[3.2vw] h-[3.2vw] rounded-full flex items-center justify-center"
                style={{ background: "rgba(124, 58, 237, 0.2)", border: "1px solid rgba(124, 58, 237, 0.4)" }}
              >
                <span className="text-primary font-display" style={{ fontSize: "1.4vw", fontWeight: 700 }}>2</span>
              </div>
              <div>
                <p className="font-body text-white" style={{ fontSize: "1.9vw", fontWeight: 600, lineHeight: 1.3 }}>
                  Déceptions et mauvaises surprises
                </p>
                <p className="font-body text-muted mt-[0.5vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.4 }}>
                  Couleurs, dimensions et styles différents des attentes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[1.5vw] animate-slide-up-delay-3" style={{ animationDelay: "0.8s" }}>
              <div
                className="flex-shrink-0 w-[3.2vw] h-[3.2vw] rounded-full flex items-center justify-center"
                style={{ background: "rgba(124, 58, 237, 0.2)", border: "1px solid rgba(124, 58, 237, 0.4)" }}
              >
                <span className="text-primary font-display" style={{ fontSize: "1.4vw", fontWeight: 700 }}>3</span>
              </div>
              <div>
                <p className="font-body text-white" style={{ fontSize: "1.9vw", fontWeight: 600, lineHeight: 1.3 }}>
                  Perte de temps et d'énergie
                </p>
                <p className="font-body text-muted mt-[0.5vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.4 }}>
                  Transport, livraison, déballage et retour à chaque essai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
