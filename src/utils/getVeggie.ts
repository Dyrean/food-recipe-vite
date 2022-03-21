export const getVeggie = async () => {
  const check = localStorage.getItem("veggie");
  if (check) return JSON.parse(check);

  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_SPOONACULAR_KEY
    }&number=10&tags=vegetarian`
  ).then((response) => response.json());
  localStorage.setItem("veggie", JSON.stringify(data.recipes));
  return data.recipes;
};
