const base = import.meta.env.BASE_URL;

export default function Slide08_Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={`${base}closing-bg.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Closing background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-[5vw]">
        <div className="animate-scale-in">
          <div
            className="w-[14vw] h-[0.4vh] mx-auto mb-[4vh]"
            style={{ background: "linear-gradient(90deg, transparent, #7c3aed, transparent)" }}
          />
        </div>
        <h1
          className="font-display text-white animate-slide-up"
          style={{ fontSize: "5vw", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          Merci
        </h1>
        <p
          className="font-body text-accent mt-[3vh] animate-slide-up-delay-1"
          style={{ fontSize: "2.2vw", fontWeight: 300, letterSpacing: "0.05em" }}
        >
          SmartHome AR
        </p>
        <p
          className="font-body text-muted mt-[2vh] animate-slide-up-delay-2"
          style={{ fontSize: "1.8vw", fontWeight: 400 }}
        >
          Votre intérieur, avant l'achat
        </p>
        <p
          className="font-body text-muted mt-[1.5vh] animate-fade-in-delay-1"
          style={{ fontSize: "1.5vw", fontWeight: 400 }}
        >
          La réalité augmentée au service de votre confort
        </p>
        <div className="animate-fade-in-delay-2 mt-[4vh] flex gap-[2vw]">
        </div>
      </div>
    </div>
  );
}
