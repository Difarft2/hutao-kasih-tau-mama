import "../styles/timeline2.css";

function Timeline2({
  image2Ref,
  image3Ref,
  image4Ref,
  image5Ref,

  ajakRef,
  kuRef,
  bertemuRef,
}) {
  return (
    <section className="timeline2">
      {/* =========================
          IMAGES
      ========================= */}

      <img
        ref={image2Ref}
        src="/assets/gambar2.png"
        className="timeline2-image"
      />

      <img
        ref={image3Ref}
        src="/assets/gambar3.png"
        className="timeline2-image"
      />

      <img
        ref={image4Ref}
        src="/assets/gambar4.png"
        className="timeline2-image"
      />

      <img
        ref={image5Ref}
        src="/assets/gambar5.png"
        className="timeline2-image"
      />

      {/* =========================
          TEXT
      ========================= */}

      <div className="timeline2-text">
        <span ref={ajakRef} className="normal-word">
          ajak
        </span>

        <span ref={kuRef} className="normal-word">
          ku
        </span>

        <span ref={bertemuRef} className="normal-word">
          bertemu
        </span>
      </div>
    </section>
  );
}

export default Timeline2;
