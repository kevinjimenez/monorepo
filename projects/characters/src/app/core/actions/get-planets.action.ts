export const getPlanets = async (): Promise<any> => {
  try {
    const response = await fetch('https://dragonball-api.com/api/characters');
    console.log({ response });

    if (!response.ok) throw "Can't get planetas";

    // const labels: GithubLabel[] = await response.json();
    // console.log({ labels });

    return [];
  } catch (error) {
    throw "Can't get planetas";
  }
};
