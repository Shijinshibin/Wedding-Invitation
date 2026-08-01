import "./WeddingDetails.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function WeddingDetails() {
  return (
    <section className="details" id="details">

      <h2>Wedding Details</h2>

      <p className="subtitle">
        We warmly invite you to celebrate our special day with your blessings.
      </p>

      <div className="cards">

        <div className="card">
          <FaCalendarAlt className="icon" />
          <h3>Date</h3>
          <p>27 August 2026</p>
          <span>Thursday</span>
        </div>

        <div className="card">
          <FaClock className="icon" />
          <h3>Time</h3>
          <p>10:30 AM</p>
          <span>to 11:30 AM</span>
        </div>

        <div className="card">
          <FaMapMarkerAlt className="icon" />
          <h3>Venue</h3>
          <p>S.A Convention Centre</p>
          <span>Nallepilly, Palakkad</span>
        </div>

      </div>

    </section>
  );
}

export default WeddingDetails;