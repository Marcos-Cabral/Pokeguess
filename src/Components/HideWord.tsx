import { IPokemon } from '../interfaces/IPokemon'
interface Props {
  guesses: Array<string>,
  pokemon: IPokemon,
}
export const HideWord = ({ guesses, pokemon }: Props) => {
  return (
    <p style={{ fontSize: 20, margin: 15 }} className='input-name'>
      {pokemon.name
        .split('')
        .map((letter) =>
          guesses.includes(letter) ? ' ' + letter + ' ' : ' _ '
        )}
    </p>
  )
}
