import { word } from '../App'
interface Props {
  resetGame(): void,
  word: word,
  language: any
}
export const EndGameModal = ({ language, resetGame, word }: Props) => {
  return (
    <section>
      <dialog className="nes-dialog" id="lost-dialog">
        <form method="dialog">
          <p className="title">{language.hasPerdido}</p>
          <span>{language.respuesta} {word.name}</span>
          <menu
            className="dialog-menu"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              className="nes-btn modal-btn"
              onClick={resetGame}
              style={{ marginRight: '40px' }}
            >
              {language.reIntentar}
            </button>
          </menu>
        </form>
      </dialog>
    </section>
  )
}
