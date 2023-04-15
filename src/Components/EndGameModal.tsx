import { IPokemon } from "../interfaces/IPokemon"

interface Props {
  resetGame(): void,
  pokemon: IPokemon,
  language: any
}
export const EndGameModal = ({ language, resetGame, pokemon }: Props) => {
  return (
    <section>
      <dialog className="nes-dialog" id="lost-dialog">
        <form method="dialog">
          <p className="title">{language.hasPerdido}</p>
          <span>{language.respuesta} {pokemon.name}</span>
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
