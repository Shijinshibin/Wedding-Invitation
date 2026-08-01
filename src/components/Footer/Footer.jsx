import "./Footer.css";
import { FaHeart, FaInstagram, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="footer-content">

        <p className="footer-top">
          ✨ Forever Begins Here ✨
        </p>

        <h2>
          Thank You
          <span className="heart">
            <FaHeart />
          </span>
        </h2>

        <p className="footer-text">
          Your presence, prayers and blessings
          <br />
          mean the world to us.
        </p>

        <p className="footer-text">
          We look forward to celebrating
          <br />
          this beautiful journey with you.
        </p>

        <div className="divider">❦</div>

        <h3>
          Amrutha
          <span>♥</span>
          Jeeva
        </h3>

        <p className="date">
          27 August 2026
        </p>

        <div className="divider">❦</div>

        {/* Designer */}

        <div className="designer">

          <p className="small">
            Designed & Developed by
          </p>

          <h4>TEXWII</h4>

          <p>
            Web Developer • Frontend Developer
            <br />
            Modern Websites & UI Design
          </p>

        </div>

        {/* Social */}

        <div className="socials">

          <a
            href="https://www.instagram.com/texwii_?igsh=MXZ4dWg3cGQ2c3UzdQ=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            Follow @texwii_
          </a>

         

        </div>

        <p className="copyright">
          © 2026 TEXWII • Crafted with Passion ❤️
        </p>

      </div>

    </footer>
  );
}

export default Footer;