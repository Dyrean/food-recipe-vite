export const getSearched = async (query: string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_SPOONACULAR_KEY
    }&query=${query}`
  ).then((response) => response.json());
  return data.results;
};
