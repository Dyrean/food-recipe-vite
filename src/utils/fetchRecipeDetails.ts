export const fetchRecipeDetails = async (recipeId: String) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${
      import.meta.env.VITE_SPOONACULAR_KEY
    }`
  ).then((response) => response.json());
  return data;
};
