import "./Venue.css";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";

const venues = [
  {
    title: "Wedding Ceremony",
    place: "S.A Convention Centre",
    address: "Nallepilly,\nPalakkad,\nKerala",
    date: "27 August 2026",
    time: "10:30 AM – 11:30 AM",
    map: "https://maps.app.goo.gl/MqxB4y4Q2Wi33FZB6?g_st=ac",
  },
  {
    title: "Wedding Reception",
    place: "Reception Venue",
    address: "Meenakshi Mahal,\n Polpully,\nKerala",
    date: "27 August 2026",
    time: "5:00 PM – 8:00 PM",
    map: "https://maps.app.goo.gl/XZH2v6v2KDkSJai59?g_st=ac",
  },
];

function Venue() {
  return (
    <section className="venue" id="venue">

      <p className="venue-subtitle">OUR VENUES</p>

      <h2>Celebrate With Us</h2>

      <div className="venue-grid">

        {venues.map((venue, index) => (
          <div className="venue-card" key={index}>

            <FaMapMarkerAlt className="venue-icon" />

            <h3>{venue.title}</h3>

            <h4>{venue.place}</h4>

            <p>
              {venue.address.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <p className="time">
              {venue.date}
              <br />
              {venue.time}
            </p>

            <a
              href={venue.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaDirections />
                Get Directions
              </button>
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Venue;