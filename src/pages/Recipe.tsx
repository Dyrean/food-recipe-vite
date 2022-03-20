import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

enum Tab {
  Instructions = "Instructions",
  Ingredients = "Ingredients",
}

function Recipe() {
  const [recipe, setRecipe] = useState<any>({});
  const [activeTab, setActiveTab] = useState(Tab.Instructions);
  const { id } = useParams();

  useEffect(() => {
    fetchRecipeDetails(id!).then((data) => setRecipe(data));
  }, [id]);

  const fetchRecipeDetails = async (recipeId: String) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${
        import.meta.env.VITE_SPOONACULAR_KEY
      }`
    ).then((response) => response.json());
    return data;
  };

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

const RecipeWrapper = styled(motion.div)`
  margin: 4rem 0rem;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  .active {
    background: linear-gradient(45deg, #505050, #313131);
    color: white;
  }

  h3 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

export default Recipe;
