interface Props {
  guesses: Array<string>,
  handleGuess(guess: string): void,
  keyboardRow: string,
}

export const Keyboard = ({ guesses, handleGuess, keyboardRow }: Props) => {
  return (
    <div className="container-buttons">
      <p className="buttons">
        {keyboardRow.split('').map((letter, index) => (
          <button
            key={index}
            className={
              guesses.includes(letter) ? 'nes-btn is-disabled btn-keyboard' : 'nes-btn btn-keyboard'
            }
            onClick={() => handleGuess(letter)}
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </p>
    </div>
  )
}
