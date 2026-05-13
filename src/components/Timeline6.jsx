import "../styles/timeline6.css";

function Timeline6({ imageRef, textRef }) {
  return (
    <section className="timeline6">
      <img
        ref={imageRef}
        src="/assets/gambar14.jpeg"
        className="timeline6-image"
      />

      <h1 ref={textRef} className="timeline6-text">
        hehe...
      </h1>
    </section>
  );
}

export default Timeline6;