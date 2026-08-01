function Sparkles() {
  return (
    <div className="sparkles">
      {Array.from({ length: 35 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Sparkles;