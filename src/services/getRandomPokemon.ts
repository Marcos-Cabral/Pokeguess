import { MAX_ID } from "../Constants";

const url = "https://pokeapi.co/api/v2/pokemon/"

export async function getPokemonRandom() {
  let randomId = Math.floor(Math.random() * MAX_ID + 1);
  const data = await fetch(`${url}${randomId}`);
  const res = await data.json();
  return res;
}