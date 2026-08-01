import "./RSVP.css";
import { useState } from "react";

function RSVP() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: 1,
    attending: "Yes"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    alert("Thank you! Your RSVP has been received.");

    setForm({
      name: "",
      phone: "",
      guests: 1,
      attending: "Yes"
    });
  };

  return (
    <section className="rsvp">

      <p className="small-title">
        RSVP
      </p>

      <h2>Will You Join Us?</h2>

      <form onSubmit={submitForm}>

        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Guests"
          name="guests"
          min="1"
          value={form.guests}
          onChange={handleChange}
        />

        <select
          name="attending"
          value={form.attending}
          onChange={handleChange}
        >
          <option>Yes</option>
          <option>No</option>
        </select>

        <button type="submit">
          Send RSVP
        </button>

      </form>

    </section>
  );
}

export default RSVP;