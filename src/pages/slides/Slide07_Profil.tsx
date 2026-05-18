export default function Slide07_Profil() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div
        className="absolute bottom-[-25vh] right-[-15vw] w-[55vw] h-[55vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[-15vh] left-[-10vw] w-[40vw] h-[40vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 flex h-full">
        <div className="flex-[50] flex flex-col justify-center px-[5vw]">
          <div className="animate-slide-up">
            <div
              className="font-display text-primary"
              style={{ fontSize: "1.4vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Profil & Projets Sauvegardés
            </div>
            <div className="w-[8vw] h-[0.3vh] bg-primary mt-[2vh]" />
          </div>
          <h2
            className="font-display text-white mt-[2.5vh] animate-slide-up-delay-1"
            style={{ fontSize: "3vw", fontWeight: 700, lineHeight: 1.2, textWrap: "balance" }}
          >
            Retrouvez tous vos projets AR en un clic
          </h2>
          <p
            className="font-body text-muted mt-[2vh] animate-fade-in-delay-1"
            style={{ fontSize: "1.6vw", fontWeight: 400, lineHeight: 1.5 }}
          >
            Chaque utilisateur dispose d'un tableau de bord personnel qui
            centralise toutes ses créations, statistiques et favoris.
          </p>
          <div className="mt-[2.5vh] space-y-[1.8vh]">
            <div
              className="animate-slide-up-delay-2 flex items-center gap-[1.5vw] p-[2vh] rounded-[1.2vw]"
              style={{ background: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.2)" }}
            >
              <div
                className="w-[4vw] h-[4vw] rounded-[0.8vw] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(124, 58, 237, 0.2)" }}
              >
                <svg className="w-[2vw] h-[2vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-white" style={{ fontSize: "1.8vw", fontWeight: 600 }}>
                  Salon Moderne
                </h4>
                <p className="font-body text-muted" style={{ fontSize: "1.4vw", fontWeight: 400 }}>
                  Sauvegardé le 12/04/2025 · 4 meubles placés
                </p>
              </div>
            </div>
            <div
              className="animate-slide-up-delay-2 flex items-center gap-[1.5vw] p-[2vh] rounded-[1.2vw]"
              style={{ background: "rgba(167, 139, 250, 0.08)", border: "1px solid rgba(167, 139, 250, 0.2)", animationDelay: "0.45s" }}
            >
              <div
                className="w-[4vw] h-[4vw] rounded-[0.8vw] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(167, 139, 250, 0.2)" }}
              >
                <svg className="w-[2vw] h-[2vw] text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-white" style={{ fontSize: "1.8vw", fontWeight: 600 }}>
                  Chambre Classique
                </h4>
                <p className="font-body text-muted" style={{ fontSize: "1.4vw", fontWeight: 400 }}>
                  Sauvegardé le 10/04/2025 · 3 meubles placés
                </p>
              </div>
            </div>
            <div
              className="animate-slide-up-delay-3 flex items-center gap-[1.5vw] p-[2vh] rounded-[1.2vw]"
              style={{ background: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.2)" }}
            >
              <div
                className="w-[4vw] h-[4vw] rounded-[0.8vw] flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(124, 58, 237, 0.2)" }}
              >
                <svg className="w-[2vw] h-[2vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-white" style={{ fontSize: "1.8vw", fontWeight: 600 }}>
                  Bureau Professionnel
                </h4>
                <p className="font-body text-muted" style={{ fontSize: "1.4vw", fontWeight: 400 }}>
                  Sauvegardé le 08/04/2025 · 5 meubles placés
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[50] flex items-center justify-center px-[4vw]">
          <div className="animate-scale-in-delay">
            <div
              className="p-[3vw] rounded-[2vw]"
              style={{ background: "rgba(124, 58, 237, 0.06)", border: "1px solid rgba(124, 58, 237, 0.15)" }}
            >
              <h3
                className="font-display text-white text-center mb-[3vh]"
                style={{ fontSize: "2vw", fontWeight: 600 }}
              >
                Tableau de Bord Utilisateur
              </h3>
              <div className="grid grid-cols-3 gap-[2vw] text-center">
                <div className="animate-slide-up-delay-1">
                  <div
                    className="font-display text-primary"
                    style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}
                  >
                    5
                  </div>
                  <div className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.4vw", fontWeight: 400 }}>
                    Projets AR
                  </div>
                  <div className="font-body text-muted" style={{ fontSize: "1.2vw", fontWeight: 400 }}>
                    sauvegardés
                  </div>
                </div>
                <div className="animate-slide-up-delay-2">
                  <div
                    className="font-display text-accent"
                    style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}
                  >
                    12
                  </div>
                  <div className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.4vw", fontWeight: 400 }}>
                    Favoris
                  </div>
                  <div className="font-body text-muted" style={{ fontSize: "1.2vw", fontWeight: 400 }}>
                    dans le catalogue
                  </div>
                </div>
                <div className="animate-slide-up-delay-3">
                  <div
                    className="font-display text-primary"
                    style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}
                  >
                    3
                  </div>
                  <div className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.4vw", fontWeight: 400 }}>
                    AR Scans
                  </div>
                  <div className="font-body text-muted" style={{ fontSize: "1.2vw", fontWeight: 400 }}>
                    cette semaine
                  </div>
                </div>
              </div>
              <div className="mt-[3vh] pt-[2vh]" style={{ borderTop: "1px solid rgba(124, 58, 237, 0.15)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-white" style={{ fontSize: "1.5vw", fontWeight: 500 }}>
                      Navigation Rapide
                    </p>
                    <p className="font-body text-muted" style={{ fontSize: "1.3vw", fontWeight: 400 }}>
                      Menu latéral pour un accès instantané
                    </p>
                  </div>
                  <div className="flex gap-[0.8vw]">
                    <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-[1.3vw] h-[1.3vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-[1.3vw] h-[1.3vw] text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div className="w-[2.5vw] h-[2.5vw] rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-[1.3vw] h-[1.3vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
