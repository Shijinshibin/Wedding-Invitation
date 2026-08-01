import { useMemo } from "react";
import "./Petals.css";

function Petals() {
  const petals = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 6}s`,
      delay: `${Math.random() * 5}s`,
      scale: 0.6 + Math.random() * 0.8,
    }));
  }, []);

  return (
    <div className="petals">
      {petals.map((petal) => (
        <span
          key={petal.id}
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            transform: `scale(${petal.scale})`,
          }}
        />
      ))}
    </div>
  );
}

export default Petals;