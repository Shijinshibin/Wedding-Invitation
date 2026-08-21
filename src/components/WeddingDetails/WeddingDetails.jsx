import "./WeddingDetails.css";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

function WeddingDetails() {
  return (
    <section className="details" id="details">

      <h2>Wedding Details</h2>

      <p className="subtitle">
        With hearts full of gratitude and the blessings of our families,
        we invite you to witness the union of two souls and the coming
        together of two families. Your gracious presence and heartfelt
        blessings will make our celebration complete as we begin this
        beautiful journey of forever.
      </p>

      <div className="cards">

        {/* Wedding Date */}

        <div className="card">

          <FaCalendarAlt className="icon" />

          <h3>Wedding Date</h3>

          <p>27 August 2026</p>

          <span>Thursday</span>

        </div>

        {/* Wedding Time */}

        <div className="card">

          <FaClock className="icon" />

          <h3>Wedding Time</h3>

          <p>10:30 AM</p>

          <span>to 11:30 AM</span>

        </div>

        {/* Wedding Venue */}

        <div className="card">

          <FaMapMarkerAlt className="icon" />

          <h3>Wedding Venue</h3>

          <p>S.A Convention Centre</p>

          <span>
            Nallepilly,
            <br />
            Palakkad, Kerala
          </span>

        </div>

        {/* Reception Venue */}

        <div className="card">

          <FaMapMarkerAlt className="icon" />

          <h3>Reception Venue</h3>

          <p>Meenakshi Mahal</p>

          <span>
             Polpully
            <br />
             Kerala
          </span>

        </div>

        {/* Reception Time */}

        <div className="card">

          <FaClock className="icon" />

          <h3>Reception Time</h3>

          <p>5:00 PM </p>

          <span>to 8:00 PM</span>

        </div>

      </div>

    </section>
  );
}

export default WeddingDetails;