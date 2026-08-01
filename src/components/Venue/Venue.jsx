import "./Venue.css";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

function Venue() {
  return (
    <section className="venue" id="venue">

      <p className="venue-subtitle">WEDDING VENUE</p>

      <h2>Join Us Here</h2>

      <div className="venue-card">

        <FaMapMarkerAlt className="venue-icon" />

        <h3>S.A Convention Centre</h3>

        <p>
          Nallepilly,
          <br />
          Palakkad,
          Kerala
        </p>

        <p className="time">
          27 August 2026
          <br />
          10:30 AM – 11:30 AM
        </p>

        <a
          href="https://maps.google.com/?q=SA+Convention+Centre+Nallepilly+Palakkad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            <FaDirections />
            Get Directions
          </button>
        </a>

      </div>

    </section>
  );
}

export default Venue;