export const getPopular = async () => {
  const check = localStorage.getItem("popular");
  if (check) return JSON.parse(check);

  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_SPOONACULAR_KEY
    }&number=10`
  ).then((response) => response.json());
  localStorage.setItem("popular", JSON.stringify(data.recipes));
  return data.recipes;
};
