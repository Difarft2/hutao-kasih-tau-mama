import "../styles/timeline1.css";

function Timeline1({ imageRef, kasihRef, tauRef, mamahRef }) {
  return (
    <div className="timeline1">
      <div className="timeline1-text">
        <span ref={kasihRef} className="word">
          KASIH
        </span>

        <span ref={tauRef} className="word">
          TAU
        </span>

        <span ref={mamahRef} className="word">
          MAMAH,
        </span>
      </div>

      <img
        ref={imageRef}
        src="/assets/gambar1.png"
        className="timeline1-image"
      />
    </div>
  );
}

export default Timeline1;
