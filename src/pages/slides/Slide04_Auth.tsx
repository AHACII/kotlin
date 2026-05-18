export default function Slide04_Auth() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">
      <div
        className="absolute bottom-[-30vh] left-[-15vw] w-[60vw] h-[60vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-[-20vh] right-[-10vw] w-[45vw] h-[45vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-[5vw]">
        <div className="animate-slide-up text-center mb-[4vh]">
          <div
            className="font-display text-primary"
            style={{ fontSize: "1.4vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
          >
            Connexion & Inscription
          </div>
          <div className="w-[8vw] h-[0.3vh] bg-primary mx-auto mt-[2vh]" />
        </div>
        <h2
          className="font-display text-white text-center mb-[4vh] animate-slide-up-delay-1"
          style={{ fontSize: "2.8vw", fontWeight: 700, lineHeight: 1.2 }}
        >
          Un accès rapide et sécurisé en quelques secondes
        </h2>
        <div className="flex gap-[3vw] items-stretch max-w-[90vw]">
          <div
            className="flex-1 animate-slide-up-delay-1 p-[2.5vw] rounded-[2vw]"
            style={{ background: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.2)" }}
          >
            <div
              className="w-[4vw] h-[4vw] rounded-full flex items-center justify-center mb-[2vh]"
              style={{ background: "rgba(124, 58, 237, 0.2)" }}
            >
              <svg className="w-[2vw] h-[2vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-display text-white" style={{ fontSize: "2vw", fontWeight: 600, marginBottom: "1.5vh" }}>
              Connexion
            </h3>
            <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Email ou numéro de téléphone
            </p>
            <p className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Accès instantané sécurisé
            </p>
            <p className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Session persistante entre les utilisations
            </p>
          </div>
          <div
            className="flex-1 animate-slide-up-delay-2 p-[2.5vw] rounded-[2vw]"
            style={{ background: "rgba(167, 139, 250, 0.08)", border: "1px solid rgba(167, 139, 250, 0.2)" }}
          >
            <div
              className="w-[4vw] h-[4vw] rounded-full flex items-center justify-center mb-[2vh]"
              style={{ background: "rgba(167, 139, 250, 0.2)" }}
            >
              <svg className="w-[2vw] h-[2vw] text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="font-display text-white" style={{ fontSize: "2vw", fontWeight: 600, marginBottom: "1.5vh" }}>
              Inscription
            </h3>
            <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Nom, prénom, date de naissance
            </p>
            <p className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Création de compte en 30 secondes
            </p>
            <p className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Vérification simple par email ou SMS
            </p>
          </div>
          <div
            className="flex-1 animate-slide-up-delay-3 p-[2.5vw] rounded-[2vw]"
            style={{ background: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.2)" }}
          >
            <div
              className="w-[4vw] h-[4vw] rounded-full flex items-center justify-center mb-[2vh]"
              style={{ background: "rgba(124, 58, 237, 0.2)" }}
            >
              <svg className="w-[2vw] h-[2vw] text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h3 className="font-display text-white" style={{ fontSize: "2vw", fontWeight: 600, marginBottom: "1.5vh" }}>
              Catalogue AR
            </h3>
            <p className="font-body text-muted" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Accès immédiat après connexion
            </p>
            <p className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Exploration sans limites du catalogue
            </p>
            <p className="font-body text-muted mt-[1vh]" style={{ fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.5 }}>
              Favoris et projets sauvegardés automatiquement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
