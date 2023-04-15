interface Prop {
  resetGame(): void
}
export const ReLoadButton = ({ resetGame }: Prop) => {
  return (
    <button
      type="button"
      className="nes-btn is-warning"
      onClick={() => resetGame()}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:"3rem",
        height:"3rem"
      }}
    >
      <img
        width="100%"
        height="100%"
        src="https://static.thenounproject.com/png/170019-200.png"
      />
    </button>
  )
}
