import "../styles/timeline5.css";

function Timeline5({
  image10Ref,
  image11Ref,
  image12Ref,
  image13Ref,
  image14Ref,

  malam1Ref,
  minggu1Ref,

  malam2Ref,
  minggu2Ref,

  jadiRef,
  kapan2Ref,
  ketemuRef,
}) {
  return (
    <section className="timeline5">
      {/* IMAGES */}

      <img
        ref={image10Ref}
        src="/assets/gambar10.jpeg"
        className="timeline5-image"
      />

      <img
        ref={image11Ref}
        src="/assets/gambar11.jpeg"
        className="timeline5-image"
      />

      <img
        ref={image12Ref}
        src="/assets/gambar12.jpg"
        className="timeline5-image2"
      />

      <img
        ref={image13Ref}
        src="/assets/gambar13.jpg"
        className="timeline5-image2"
      />

      <img
        ref={image14Ref}
        src="/assets/gambar14.jpeg"
        className="timeline5-image"
      />

      {/* TEXT */}

      <div className="timeline5-text">
        <div className="malam-minggu1">
          <h1 ref={malam1Ref}>MALAM</h1>
          <h1 ref={minggu1Ref}>MINGGU</h1>
        </div>

        <div className="malam-minggu2">
          <h1 ref={malam2Ref}>MALAM</h1>
          <h1 ref={minggu2Ref}>MINGGU</h1>
        </div>

        <div className="text-ahir">
          <h1 ref={jadiRef}>Esok</h1>
          <h1 ref={kapan2Ref}>Lusa</h1>
          <h1 ref={ketemuRef}>Malam Minggu</h1>
        </div>
      </div>
    </section>
  );
}

export default Timeline5;
