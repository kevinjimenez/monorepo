import { sleep } from '../../helpers/sleep';
import { Character, CharactersResponse } from '../../interfaces';

export const getCharactersByPage = async (
  page: number,
  limit = 10
): Promise<Character[]> => {
  try {
    await sleep(1500);

    const response = await fetch(
      `https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`
    );
    console.log({ response });

    if (!response.ok) throw "Can't get personajes by page";

    const characters: CharactersResponse = await response.json();

    const { items } = characters;

    return items;
  } catch (error) {
    console.log({ error });

    throw "Can't get personajes by page";
  }
};
