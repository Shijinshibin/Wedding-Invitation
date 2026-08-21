import "./Footer.css";
import {
  FaHeart,
  FaInstagram,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="footer-content">

        {/* Thank You */}

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

        <div className="divider">
          ❦
        </div>

        {/* Couple */}

        <h3 className="couple-name">
          Amulya
          <span> ♥ </span>
          Jeeva
        </h3>

        <p className="date">
          27 August 2026
        </p>

        <div className="divider">
          ❦
        </div>

        {/* =========================
            TEXWII BRAND
        ========================== */}

        <div className="designer">

          <FaLaptopCode className="brand-icon" />

          <p className="small">
            Designed & Developed by
          </p>

          <h4 className="brand">
            TEXWII
          </h4>

          <p className="tagline">
            Crafting Premium Digital Experiences
          </p>

          <p className="description">
            Luxury Wedding Websites
            <br />
            Business Websites
            <br />
            React • MERN Stack • UI / UX Design
          </p>

          <a
            href="https://www.instagram.com/texwii_?igsh=MXZ4dWg3cGQ2c3UzdQ=="
            target="_blank"
            rel="noreferrer"
            className="instagram-btn"
          >
            <FaInstagram />
            Follow @texwii_
          </a>

        </div>

        {/* Footer */}

        <div className="footer-bottom">

          <FaCode />

          <p>
            © 2026 TEXWII • Crafted with Passion ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;