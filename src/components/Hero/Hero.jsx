import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/wedding.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <p className="save">SAVE THE DATE</p>

        <h1 className="hero-title">
          Amrutha
          <span>&</span>
          Jeeva
        </h1>

        <h3 className="hero-date">27 August 2026</h3>

        <p className="hero-day">Thursday</p>

        <p className="hero-venue">
          S.A Convention Centre
          <br />
          Nallepilly, Palakkad
        </p>
      </div>
    </section>
  );
}

export default Hero;