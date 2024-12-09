import { sleep } from '../../helpers/sleep';
import { CharacterResponse } from '../../interfaces';

export const getCharacterById = async (
  id: string
): Promise<CharacterResponse> => {
  try {
    await sleep(1500);
    const url = `https://dragonball-api.com/api/characters/${id}`;

    const response = await fetch(url);
    console.log({ response });

    if (!response.ok) throw "Can't get personajes";

    const character: CharacterResponse = await response.json();

    return character;
  } catch (error) {
    console.log({ error });

    throw "Can't get personajes";
  }
};
