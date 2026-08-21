import "./Gallery.css";

const images = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
];

function Gallery() {
  return (
    <section className="gallery">

      <p className="gallery-subtitle">
        OUR MEMORIES
      </p>

      <h2>
        Moments We Treasure
      </h2>

      <p className="gallery-text">
        Every smile, every glance,
        every memory tells our story.
      </p>

      <div className="gallery-grid">

        {images.map((image, index) => (

          <div
            className="gallery-card"
            key={index}
          >

            <img
              src={image}
              alt=""
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;