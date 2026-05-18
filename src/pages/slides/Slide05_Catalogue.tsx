export default function Slide05_Catalogue() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div
        className="absolute top-[-20vh] left-[-10vw] w-[50vw] h-[50vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 flex items-center justify-center h-full px-[8vw]">
        <div className="max-w-[75vw]">
          <div className="animate-slide-up text-center">
            <div
              className="font-display text-primary"
              style={{ fontSize: "1.4vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Catalogue AR Intelligent
            </div>
            <div className="w-[8vw] h-[0.3vh] bg-primary mx-auto mt-[2vh]" />
          </div>
          <h2
            className="font-display text-white mt-[3vh] text-center animate-slide-up-delay-1"
            style={{ fontSize: "3.2vw", fontWeight: 700, lineHeight: 1.2, textWrap: "balance" }}
          >
            Explorez par catégorie avec des visuels en haute qualité
          </h2>
          <p
            className="font-body text-muted mt-[2vh] text-center animate-fade-in-delay-1"
            style={{ fontSize: "1.6vw", fontWeight: 400, lineHeight: 1.5 }}
          >
            Un catalogue complet organisé par pièce, avec des images réalistes
            et des descriptions détaillées pour chaque article.
          </p>
          <div className="mt-[3vh] grid grid-cols-4 gap-[2vw]">
            <div
              className="animate-slide-up-delay-2 p-[2.5vh] rounded-[1.5vw] flex flex-col items-center gap-[1.5vh]"
              style={{ background: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.25)" }}
            >
              <div className="w-[5vw] h-[5vw] rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-display" style={{ fontSize: "2vw", fontWeight: 700 }}>S</span>
              </div>
              <span className="font-body text-white" style={{ fontSize: "1.8vw", fontWeight: 500 }}>Salon</span>
              <span className="font-body text-muted" style={{ fontSize: "1.3vw", fontWeight: 400 }}>Canapés, tables, luminaires</span>
            </div>
            <div
              className="animate-slide-up-delay-2 p-[2.5vh] rounded-[1.5vw] flex flex-col items-center gap-[1.5vh]"
              style={{ background: "rgba(167, 139, 250, 0.1)", border: "1px solid rgba(167, 139, 250, 0.25)", animationDelay: "0.45s" }}
            >
              <div className="w-[5vw] h-[5vw] rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-display" style={{ fontSize: "2vw", fontWeight: 700 }}>C</span>
              </div>
              <span className="font-body text-white" style={{ fontSize: "1.8vw", fontWeight: 500 }}>Chambre</span>
              <span className="font-body text-muted" style={{ fontSize: "1.3vw", fontWeight: 400 }}>Lits, commodes, armoires</span>
            </div>
            <div
              className="animate-slide-up-delay-3 p-[2.5vh] rounded-[1.5vw] flex flex-col items-center gap-[1.5vh]"
              style={{ background: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.25)" }}
            >
              <div className="w-[5vw] h-[5vw] rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-display" style={{ fontSize: "2vw", fontWeight: 700 }}>K</span>
              </div>
              <span className="font-body text-white" style={{ fontSize: "1.8vw", fontWeight: 500 }}>Cuisine</span>
              <span className="font-body text-muted" style={{ fontSize: "1.3vw", fontWeight: 400 }}>Tables, chaises, rangements</span>
            </div>
            <div
              className="animate-slide-up-delay-3 p-[2.5vh] rounded-[1.5vw] flex flex-col items-center gap-[1.5vh]"
              style={{ background: "rgba(167, 139, 250, 0.1)", border: "1px solid rgba(167, 139, 250, 0.25)", animationDelay: "0.55s" }}
            >
              <div className="w-[5vw] h-[5vw] rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-display" style={{ fontSize: "2vw", fontWeight: 700 }}>B</span>
              </div>
              <span className="font-body text-white" style={{ fontSize: "1.8vw", fontWeight: 500 }}>Bureau</span>
              <span className="font-body text-muted" style={{ fontSize: "1.3vw", fontWeight: 400 }}>Bureaux, étagères, fauteuils</span>
            </div>
          </div>
          <div className="mt-[3vh] flex items-center justify-center gap-[3vw]">
            <div className="flex items-center gap-[0.8vw] animate-fade-in-delay-2">
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent" />
              <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400 }}>
                Barre de recherche intelligente
              </p>
            </div>
            <div className="flex items-center gap-[0.8vw] animate-fade-in-delay-2" style={{ animationDelay: "0.6s" }}>
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent" />
              <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400 }}>
                Favoris et recommandations
              </p>
            </div>
            <div className="flex items-center gap-[0.8vw] animate-fade-in-delay-2" style={{ animationDelay: "0.7s" }}>
              <div className="w-[0.6vw] h-[0.6vw] rounded-full bg-accent" />
              <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400 }}>
                Filtres avancés par style
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
