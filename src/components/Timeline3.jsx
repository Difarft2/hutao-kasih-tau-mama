import "../styles/timeline3.css"

function Timeline3({

  imageRef,

  kapanRef,
  dimanaRef,
  danRef

}) {

  return (
    <section className="timeline3">

      {/* =========================
          IMAGE
      ========================= */}

      <img
        ref={imageRef}
        src="/assets/gambar6.png"
        className="timeline3-image"
      />

      {/* =========================
          TEXT
      ========================= */}

      <div className="timeline3-text">

        <div
          ref={kapanRef}
          className="kapan-box"
        >
          kapan
        </div>

        <div className="dimana-wrapper">

          <div
            ref={dimanaRef}
            className="dimana-box"
          >
            dimana?
          </div>

          <div
            ref={danRef}
            className="dan-box"
          >
            &
          </div>

        </div>

      </div>

    </section>
  )
}

export default Timeline3