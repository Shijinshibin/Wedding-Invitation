import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const weddingDate = new Date("August 27, 2026 10:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, );

  return (
    <section className="countdown">

      <h2>Countdown to Our Wedding</h2>

      <div className="timer">

        <div className="box">
          <h1>{timeLeft.days}</h1>
          <span>Days</span>
        </div>

        <div className="box">
          <h1>{timeLeft.hours}</h1>
          <span>Hours</span>
        </div>

        <div className="box">
          <h1>{timeLeft.minutes}</h1>
          <span>Minutes</span>
        </div>

        <div className="box">
          <h1>{timeLeft.seconds}</h1>
          <span>Seconds</span>
        </div>

      </div>

    </section>
  );
}

export default Countdown;