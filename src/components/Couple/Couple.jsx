import "./Couple.css";

function Couple() {
  return (
    <section className="couple-section">

      <img
        src={`${import.meta.env.BASE_URL}gallery/photo4.jpg`}
        alt="Amulya and Jeeva"
        className="couple-image"
      />

      <h2>
        Amulya <span>♥</span> Jeeva
      </h2>

      <p>
        <em>
          "Two Hearts,
          <br />
          One Beautiful Journey,
          <br />
          Forever Together."
        </em>
      </p>

    </section>
  );
}

export default Couple;