import "./Hero.css";

function Hero() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src={`${import.meta.env.BASE_URL}videos/wedding.mp4`}
          type="video/mp4"
        />

        Your browser does not support the video element.
      </video>

      <div className="overlay"></div>

      <div className="hero-content">

        <p className="save">
          Join Us On
        </p>

        <h1 className="hero-title">
          Amulya

          <span>&</span>

          Jeeva
        </h1>

        <h3 className="hero-date">
          27 August 2026
        </h3>

        <p className="hero-day">
          Thursday
        </p>

        <p className="let-the">
          Let the story unfold
        </p>

      </div>

      <button
        className="scroll-down"
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <span className="scroll-text">
          SCROLL
        </span>

        <span className="scroll-line"></span>

        <span className="scroll-arrow">
          ↓
        </span>
      </button>

    </section>
  );
}

export default Hero;