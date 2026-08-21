import { useState } from "react";
import "./Envelope.css";
import env from "../../assets/images/env.png";

function Envelope({ onOpen }) {

  const [closing, setClosing] = useState(false);

  const handleOpen = () => {

    setClosing(true);

    setTimeout(() => {
      onOpen();
    }, 300);

  };

  return (
    <section className={`envelope-screen ${closing ? "fade-out" : ""}`}>

      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      <div className="envelope-container">

       <p className="welcome">
    TOGETHER WITH OUR FAMILIES
</p>

<div className="divider"></div>

<h1 className="title">
    Wedding
</h1>

<h2 className="script">
    Invitation
</h2>

<p className="quote">
    Two hearts. One promise.
    <br />
    A lifetime of love.
</p>

<div className="divider"></div>

<p className="sub">
    WE WARMLY INVITE YOU TO
    <br />
    CELEBRATE OUR BEAUTIFUL BEGINNING.
</p>

<img
    src={env}
    className="envelope-img"
    onClick={handleOpen}
/>

<p className="click">
    Click the Envelope to Open
</p>
      </div>

    </section>
  );
}

export default Envelope;