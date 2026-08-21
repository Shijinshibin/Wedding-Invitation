import "./Story.css";

function Story() {
  const stories = [
    {
      date: "December 14, 2025",
      title: "The official gathering ",
      text: "A day when two families came together, embracing a future filled with love, trust, and togetherness."
    },
    {
      date: "January 26, 2026",
      title: "The Promise",
      text: "Surrounded by the love and blessings of our families, we promised to walk hand in hand through every chapter of life."
    },
    {
      date: "August 27, 2026",
      title: "The Celebration",
      text: "The day, our two hearts become one. We begin a new journey filled with love, happiness, and a lifetime of beautiful memories."
    }
  ];

  return (
    <section className="story" id="story">
      <div className="story-container">

        <p className="section-title">OUR STORY</p>

        <h2>Every Love Story is Beautiful,<br />But Ours is Our Favorite.</h2>

        <p className="story-intro">
          Some love stories begin with a grand gesture, while others quietly
          blossom over time.
          <br /><br />
          Our story began with two hearts, two families, and countless moments
          that brought us closer. Through laughter, unwavering support, and
          cherished memories, we found in each other not just love, but a
          lifelong best friend.
          <br /><br />
          Now, as our two journeys become one, we are ready to begin a beautiful
          new chapter together.
          <br /><br />
          With the blessings of our families, we warmly invite you to join us as
          we celebrate our wedding and witness the beginning of our forever.
        </p>

        <div className="timeline">
          {stories.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="circle"></div>

              <div className="content">
                <span>{item.date}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Story;