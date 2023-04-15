import { word } from '../App'
interface Props {
  esDark: boolean,
  isHardMode: boolean,
  won: boolean,
  word: word,
}
export const PokemonSprite = ({ esDark, isHardMode, word, won }: Props) => {
  return (
    <img
      src={
        !isHardMode
          ? word.img.other['official-artwork'].front_default
          : word.img['back_default']
      }
      className={won ? '' : esDark? 'img-dark' : 'img-light'}
      style={{
        width: 200,
        pointerEvents: 'none',
      }}
    />
  )
}
