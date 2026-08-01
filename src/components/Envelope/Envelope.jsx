import { useRef } from "react";
import "./Envelope.css";



function Envelope({ onOpen }) {



  const handleOpen = () => {


    setTimeout(() => {

      onOpen();

    }, 1000);

  };

  return (

    <>



      <section className="envelope-screen">

        <div className="bg-glow glow1"></div>

        <div className="bg-glow glow2"></div>

        <div className="envelope-container">

          <p className="welcome">

            Together with our families

          </p>

          <h1>

            Wedding Invitation

          </h1>

          <p className="sub">

            We warmly invite you to celebrate
            <br />
            our beautiful beginning.

          </p>

          <div
            className="envelope"
            onClick={handleOpen}
          >

            <div className="envelope-back"></div>

            <div className="flap"></div>

            <div className="seal">

              ❤

            </div>

          </div>

          <p className="click">

            ✨ Tap the Golden Seal to Open ✨

          </p>

        </div>

      </section>

    </>

  );

}

export default Envelope;