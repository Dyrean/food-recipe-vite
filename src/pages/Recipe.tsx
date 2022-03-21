import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../components/Button.styles";
import { RecipeWrapper } from "../components/RecipeWrapper.styles";
import { Info } from "../components/RecipeInfo.styles";
import { fetchRecipeDetails } from "../utils/fetchRecipeDetails";

enum Tab {
  Instructions = "Instructions",
  Ingredients = "Ingredients",
}

export default function Recipe() {
  const [recipe, setRecipe] = useState<any>({});
  const [activeTab, setActiveTab] = useState(Tab.Instructions);
  const { id } = useParams();

  useEffect(() => {
    fetchRecipeDetails(id!).then((data) => setRecipe(data));
  }, [id]);

  return (
    <RecipeWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!!recipe && (
        <>
          <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt="" />
          </div>
          <Info>
            <Button
              className={activeTab === Tab.Instructions ? "active" : ""}
              onClick={() => setActiveTab(Tab.Instructions)}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === Tab.Ingredients ? "active" : ""}
              onClick={() => setActiveTab(Tab.Ingredients)}
            >
              Ingredients
            </Button>
            {activeTab === Tab.Instructions && (
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
              </div>
            )}

            {activeTab === Tab.Ingredients && (
              <ul>
                {!!recipe.extendedIngredients &&
                  recipe.extendedIngredients.map((ingredient: any) => {
                    return <li key={ingredient.id}>{ingredient.original}</li>;
                  })}
              </ul>
            )}
          </Info>
        </>
      )}
    </RecipeWrapper>
  );
}
