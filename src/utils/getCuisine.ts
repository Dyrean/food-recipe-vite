export const getCuisine = async (name: string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_SPOONACULAR_KEY
    }&cuisine=${name}`
  ).then((response) => response.json());
  return data.results;
};
