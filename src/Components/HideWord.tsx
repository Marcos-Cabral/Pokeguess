import { word } from '../App'
interface Props {
  guesses: Array<string>,
  word: word,
}
export const HideWord = ({ guesses, word }: Props) => {
  return (
    <p style={{ fontSize: 20, margin: 15 }} className='input-name'>
      {word.name
        .split('')
        .map((letter) =>
          guesses.includes(letter) ? ' ' + letter + ' ' : ' _ '
        )}
    </p>
  )
}
