import "../styles/play-button.css"

function PlayButton({ onStart }) {

  return (
    <button
      className="play-button"
      onClick={onStart}
    >
      Start
    </button>
  )
}

export default PlayButton