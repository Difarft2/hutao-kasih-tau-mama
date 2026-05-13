import "../styles/timeline4.css";

function Timeline4({
  image7Ref,
  image8Ref,
  image9Ref,

  esokRef,
  lusaRef,
  atauRef,
  malamRef,
}) {
  return (
    <section className="timeline4">
      {/* =========================
          IMAGES
      ========================= */}

      <img
        ref={image7Ref}
        src="/assets/gambar7.png"
        className="timeline4-image"
      />

      <img
        ref={image8Ref}
        src="/assets/gambar8.png"
        className="timeline4-image"
      />

      <img
        ref={image9Ref}
        src="/assets/gambar9.png"
        className="timeline4-image"
      />

      {/* =========================
          TEXT
      ========================= */}

      <div className="timeline4-text">
        <h1 ref={esokRef} className="timeline4-word">
          ESOK
        </h1>

        <h1 ref={lusaRef} className="timeline4-word">
          LUSA
        </h1>

        <h1 ref={atauRef} className="timeline4-word">
          ATAU
        </h1>

        <h1 ref={malamRef} className="timeline4-word">
          MALAM MINGGU
        </h1>
      </div>
    </section>
  );
}

export default Timeline4;
