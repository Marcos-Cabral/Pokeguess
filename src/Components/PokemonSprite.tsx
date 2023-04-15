import { IPokemon } from '../interfaces/IPokemon'
interface Props {
  esDark: boolean,
  isHardMode: boolean,
  won: boolean,
  pokemon: IPokemon,
}
export const PokemonSprite = ({ esDark, isHardMode, pokemon, won }: Props) => {
  return (
    <img
      src={
        !isHardMode
          ? pokemon.img.other['official-artwork'].front_default
          : pokemon.img['back_default']
      }
      className={won ? '' : esDark? 'img-dark' : 'img-light'}
      style={{
        width: 200,
        pointerEvents: 'none',
      }}
    />
  )
}
